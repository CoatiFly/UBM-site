<template>
<div class="out-side">
  <!-- RSS 弹层 -->
  <div class="layou_fixed" v-if="rssLayouStatus" @touchmove.prevent> 
    <div class="fixed_pos" :class="isPC ? 'layou_rss_box' : 'mobile_layou_rss_box'">
      <div class="close" v-on:click="SwitchLayou('rssLayouStatus')"></div>
      <div class="title">{{$t("subscribe.title")}}</div>
      <ul class="list_box">
        <li class="item">
          <div class="name">{{$t("subscribe.sex")}}<span class="red">*</span></div>
          <div class="pill_box">
            <p class="input_box pull_icon" v-on:click="SwitchLayou('sexCheckStatus')">{{rssForm.sex}}</p>
            <div class="pull_down" v-if="sexCheckStatus" v-on:mouseleave="SwitchLayou('sexCheckStatus')">
              <ul class="box" v-for="(item,index) in SexName" :key="item.cname">
                <li class="sex" v-on:click="selectSexName(index)">{{language == "en" ? item.ename : item.cname}}</li>
              </ul>
            </div>            
          </div>           
        </li>
        <li class="item">
          <div class="name">{{$t("subscribe.last")}}<span class="red">*</span></div>
          <input class="input_box" type="text" v-model="rssForm.last">         
        </li>
        <li class="item">
          <div class="name">{{$t("subscribe.given")}}<span class="red">*</span></div>
          <input class="input_box" type="text" v-model="rssForm.given" >
        </li>
        <li class="item">
          <div class="name">{{$t("subscribe.email")}}<span class="red">*</span></div>
          <input class="input_box" type="text" v-model="rssForm.email">
        </li>
        <li class="item">
          <div class="Submit" v-on:click="checkOrderConter">{{$t("subscribe.button")}}</div>
        </li>
      </ul>
    </div>
  </div>    
</div>
</template>

<script>
import { MessageBox } from "mint-ui";
import getModel from "../models/model";
let submitNewsSubscribeModel = getModel("submitNewsSubscribeModel");

export default {
  name: "subscribe",
  data() {
    return {
      isPC: '',
      language: '',
      rssLayouStatus: false,
      sexCheckStatus: false,
      SexName: [{ename: 'Mr',cname: '先生'},{ename: 'Mrs',cname: '女士'}],
      rssForm: {
        sex: '',
        last: '',
        given: '',
        email: ''
      }
    };
  },
  computed: {
    getUserlanguage() {
      return this.$store.state.language;
    }
  },
  watch: {
    getUserlanguage(val) {
      this.language = val;
      this.selectSexName(0);
    }
  },
  mounted() {
    this.isPC = this.$store.state.isPC;
    this.language = this.$store.state.language;
    this.selectSexName(0);
  },
  methods: {
    show: function(){
      this.rssLayouStatus = true;
    },
    hide: function(){
      this.rssLayouStatus = false;
    },
    SwitchLayou: function(name){
      // 动态切换状态
      this[name] = !this[name];
    },
    selectSexName: function(index){
      // 选择性别
      if (this.language == "en") {
        this.rssForm.sex = this.SexName[index].ename;
      }else{
        this.rssForm.sex = this.SexName[index].cname;        
      };      
      this.sexCheckStatus = false;
    },
    checkOrderConter: function(){
      // 检查提交表单是否为空
      let regExp_mail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;      
      let params = {
            title: "",
            confirmButtonText: this.language == "en" ? "Confirm" : "确认",
          };

      if(!this.rssForm.last.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "Last names cannot be empty." : "姓氏不能为空!";
          MessageBox(params);
      }else if(!this.rssForm.given.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "given name cannot be empty." : "名称不能为空!"
          MessageBox(params);
      }else if(!this.rssForm.email.replace(/\s+/g, "")){
          params.message = this.language == "en" ? "Email cannot not by empty." : "电子邮箱不能为空!"
          MessageBox(params);
      }else if(!regExp_mail.test(this.rssForm.email)){
          params.message = this.language == "en" ? "Email format error." : "电子邮箱格式错误!"
          MessageBox(params);
      }else{
        this.submitSubscribe();
      }
    },
    submitSubscribe: function(){
      // 订阅表单
      let that = this;
      let params = {
        gender: this.rssForm.sex,
        first_name: this.rssForm.last,
        last_name: this.rssForm.given,
        email: this.rssForm.email,
      };

      submitNewsSubscribeModel.$post(params).then(info => {
        if (info.status == 1) {
          that.rssLayouStatus = false;
          let message = this.language == "en" ? "Your reservation has been successfully submitted." : "您的订阅已成功提交！"
          MessageBox('', message);
          this.initObject(this.rssForm);
          this.selectSexName(0);
          console.log("订阅表单提交成功");
        }
      });      
    },
    initObject: function(obj) {
      // 初始化对象
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = "";
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
