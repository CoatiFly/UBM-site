<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <div class="page_content stand">
      <div class="text_box">
        <p class="title">{{$t("stand.title")}}</p>
        <p class="fonts">{{$t("stand.second")}}</p>
        <p class="fonts mt20">{{$t("stand.three")}}<span class="red"> * </span>{{$t("stand.four")}}</p>
      </div>
      <div class="center_box">
        <!-- 基础信息 -->
        <ul class="input_list">
          <li class="item">
            <p class="title">{{$t("stand.company")}}<i class="red">*</i></p>
            <input type="text" v-model="stand.name">
          </li>
          <li class="item">
            <p class="title">{{$t("stand.contact")}}<i class="red">*</i></p>
            <input type="text" v-model="stand.person">
          </li>
          <li class="item">
            <p class="title">{{$t("stand.phone")}}<i class="red">*</i></p>
            <input type="number" v-model="stand.phone">
          </li>
          <li class="item">
            <p class="title">{{$t("stand.mobile")}}<i class="red">*</i></p>
            <input type="number" v-model="stand.mobile" maxlength="11">
          </li>
          <li class="item">
            <p class="title">{{$t("stand.email")}}<i class="red">*</i></p>
            <input type="text" v-model="stand.email">
          </li>
          <li class="item">
            <p class="title">{{$t("stand.website")}}<i class="red">*</i></p>
            <input type="text" v-model="stand.website">
          </li>
          <li class="item">
            <p class="title">{{$t("stand.fax")}}</p>
            <input type="number" v-model="stand.fax">
          </li>
        </ul>
        <!-- 产品种类 -->
        <div class="product_box">
          <p class="title">{{$t("stand.categoryTitle")}}</p>
          <ul class="check_list">
            <li class="item" v-for="(item,index) in product_type" :key="item.value">
              <span :class="[item.isSelected ? 'selected' : 'unselected']"  v-on:click="switchProduct(item,index)"></span>
              <span class="text">{{language == "en" ? item.ename : item.name}}</span>
            </li> 
            <li class="item" v-show="proOthersState">
              <input type="text" v-model="proOthers">
            </li>                                                 
          </ul>
        </div>
        <!-- 目标客户 -->
        <div class="product_box">
          <p class="title">{{$t("stand.clientsTitle")}}</p>
          <ul class="check_list">
            <li class="item" v-for="(item,index) in target_type" :key="item.value">
              <span :class="[item.isSelected ? 'selected' : 'unselected']"  v-on:click="switchClients(item,index)"></span>
              <span class="text">{{language == "en" ? item.ename.replace("amp;",'') : item.name}}</span>
            </li>         
            <li class="item" v-show="cliOthersState">
              <input type="text" v-model="cliOthers">
            </li>                                                 
          </ul>
        </div>      
        <!-- 展台种类 -->
        <div class="booth_box">
          <p class="title">{{$t("stand.tarTitle")}}</p>
          <ul class="check_list">
            <li class="item" v-for="(item,index) in booth_type" :key="item.id">
              <span class="unselected" :class="{selected: boothClassType == index}" v-on:click="switchBooth(index)"></span>
              <span class="text">{{language == "en" ? item.en_name.replace("amp;",'') : item.cn_name}}</span>
            </li>                                               
          </ul>
          <ul class="input_list">
            <li class="item">
              <p class="title">{{$t("stand.booth")}}</p>
              <input type="text" v-model="stand.number">
            </li>
            <li class="item">
              <p class="title">{{$t("stand.length")}}</p>
              <input type="text" v-model="stand.length">
            </li>
            <li class="item">
              <p class="title">{{$t("stand.width")}}</p>
              <input type="text" v-model="stand.width">
            </li>                
          </ul>
          <p class="tips">{{$t("stand.tips")}}</p>       
        </div>
        <!-- 按钮列表 -->
        <div class="bth_list">
          <span class="bth submit" v-on:click="checkOrderConter">{{$t("stand.submit")}}</span>
          <span class="bth reset" v-on:click="resetOrder">{{$t("stand.reset")}}</span>
        </div>      
      </div>
    </div> 
  </div> 


</div>
</template>

<script>
import { MessageBox } from "mint-ui";
import getModel from "../models/model";
import tokyo from "../common/util";
let submitOrderFormModel = getModel("submitOrderFormModel");
let getEnumListModel = getModel("getEnumListModel");

export default {
  name: "Stand",
  data() {
    return {
      isPC: "",
      language: "",
      stand: {
        name: "",
        person: "",
        phone: "",
        mobile: "",
        email: "",
        website: "",
        fax: "",
        number: "",
        length: "",
        width: ""
      },
      proOthersState: false,
      proOthers: "",
      cliOthersState: false,
      cliOthers: "",
      boothClassType: 0,
      product_type: [],
      target_type: [],
      booth_type: [
        { cn_name: "豪华标准展台", en_name: "Deluxe Shell Stand", id: 0 },
        { cn_name: "光地展台", en_name: "IN ASSOCIATION WITH", id: 1 }
      ]
    };
  },
  components: {},
  computed: {
    getUserlanguage() {
      return this.$store.state.language;
    }
  },
  watch: {
    getUserlanguage(val) {
      this.language = val;
    }
  },
  mounted() {
    this.language = this.$store.state.language;
    this.isPC = this.$store.state.isPC;
    console.log(this.language, this.isPC);
    this.init();
  },
  methods: {
    init: function() {
      this.getProductConfig();
      this.getTargetConfig();
    },
    getProductConfig: function() {
      // 获取配置数据
      let params = {
        name: "ExhibitorCategory"
      };
      getEnumListModel.$post(params).then(info => {
        if (info.status == 1) {
          this.product_type = info.data;
          console.log("产品类型：", info.data);
        }
      });
    },
    getTargetConfig: function() {
      // 获取配置数据
      let params = {
        name: "TargetClientCategory"
      };
      getEnumListModel.$post(params).then(info => {
        if (info.status == 1) {
          this.target_type = info.data;
          console.log("目标客户：", info.data);
        }
      });
    },
    switchProduct: function(item, index) {
      // 产品切换选中状态
      this.$set(item, "isSelected", !item.isSelected);
      // others open input
      let count = this.product_type.length - 1;
      if (index == count) {
        this.proOthersState = !this.proOthersState;
      }
    },
    switchClients: function(item, index) {
      // 目标切换选中状态
      this.$set(item, "isSelected", !item.isSelected);
      // others open input
      let count = this.target_type.length - 1;
      if (index == count) {
        this.cliOthersState = !this.cliOthersState;
      }
    },
    switchBooth: function(type) {
      // 切换target booth
      this.boothClassType = type;
    },
    checkOrderConter: function(){
      // 检查提交表单是否为空
      let params = {
            title: "",
            confirmButtonText: this.language == "en" ? "Confirm" : "确认",
          };
      if(!this.stand.name.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "The company name cannot be empty." : "公司名称不能为空!";
          MessageBox(params);
      }else if(!this.stand.person.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "The name cannot be empty." : "姓名不能为空!"
          MessageBox(params);
      }else if(!this.stand.phone.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "The phone number cannot be empty." : "电话号码不能为空!"
          MessageBox(params);
      }else if(!this.stand.mobile.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "Cell phone Numbers cannot be empty." : "手机号码不能为空!"
          MessageBox(params);
      }else if(!this.stand.email.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "Email cannot not by empty." : "电子邮箱不能为空!"
          MessageBox(params);
      }else if(!this.stand.website.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "website cannot not by empty." : "网址不能为空!"
          MessageBox(params);
      }else{
        this.submitOrder();
      }
    },
    submitOrder: function() {
      // 提交表单
      let params = {
        company_name: this.stand.name,
        contact_person: this.stand.person,
        phone: this.stand.phone,
        mobile: this.stand.mobile,
        email: this.stand.email,
        web_site: this.stand.website,
        fax: this.stand.fax,
        booth_number: this.stand.number,
        booth_length: this.stand.length,
        booth_width: this.stand.width
      };

      if (this.language == "en") {
        params.language_version = "english";
        params.target_booth_type = this.booth_type[this.boothClassType].en_name;
        params.product_category = this.jionString("product", "en");
        params.target_client = this.jionString("target", "en");
      } else {
        params.language_version = "chinese";
        params.target_booth_type = this.booth_type[this.boothClassType].cn_name;
        params.product_category = this.jionString("product", "cn");
        params.target_client = this.jionString("target", "cn");
      }
      submitOrderFormModel.$post(params).then(info => {
        if (info.status == 1) {
          let message = this.language == "en" ? "Your reservation has been successfully submitted." : "您的预订已成功提交，我们会尽快与您联络，谢谢！"
          MessageBox('', message);
          console.log("提交成功");
        }
      });
    },
    jionString: function(name, language) {
      // 连接选项字符串
      let str = "",
        source = "",
        ohter = "";

      if (name == "product") {
        source = this.product_type;
        ohter = this.proOthers ? "," + this.proOthers : "";
      } else {
        source = this.target_type;
        ohter = this.cliOthers ? "," + this.cliOthers : "";
      }

      if (language == "en") {
        source.forEach(item => {
          if (item.isSelected) {
            str += item.ename + ",";
          }
        });
      } else {
        source.forEach(item => {
          if (item.isSelected) {
            str += item.name + ",";
          }
        });
      }

      return str.substring(0,str.length - 1) + ohter;
    },
    resetOrder: function() {
      // 重置表
      let that = this;
      MessageBox.confirm("", {
        title: "",
        message: this.language == "en" ? "Confirm the reset form？" : "确认重置表单？",
        confirmButtonText: this.language == "en" ? "Confirm" : "确认",
        cancelButtonText: this.language == "en" ? "Cancel" : "取消"
      })
        .then(action => {
          if (action == "confirm") {
            that.cleanForm();
          }
        })
        .catch(err => {
          if (err == "cancel") {
            console.log("取消操作~");
          }
        });
    },
    cleanForm: function() {
      // 执行清理表单工作
      this.stand = this.initObject(this.stand);
      this.proOthersState = false;
      this.proOthers = "";
      this.cliOthersState = false;
      this.cliOthers = "";
      this.boothClassType = 0;
    },
    initObject: function(obj) {
      // 初始化对象
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = "";
        }
      }
      return obj;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
