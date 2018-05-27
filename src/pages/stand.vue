<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <myBanner></myBanner>
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <div class="page_content stand">
      <div class="text_box">
        <p class="title">EXHIBIT AT FOOD & DRINK EXPO 2020</p>
        <p class="fonts">To find out more about taking part in the 2020 event, please complete the form below, and we will be in contact with you, shortly.</p>
        <p class="fonts mt20">Fields marked with * are mandatory</p>
      </div>
      <div class="center_box">
        <!-- 基础信息 -->
        <ul class="input_list">
          <li class="item">
            <p class="title">Company Name<i class="red">*</i></p>
            <input type="text" v-model="stand.name">
          </li>
          <li class="item">
            <p class="title">Contact Person<i class="red">*</i></p>
            <input type="text" v-model="stand.person">
          </li>
          <li class="item">
            <p class="title">Phone<i class="red">*</i></p>
            <input type="text" v-model="stand.phone">
          </li>
          <li class="item">
            <p class="title">Mobile<i class="red">*</i></p>
            <input type="text" v-model="stand.mobile">
          </li>
          <li class="item">
            <p class="title">Email<i class="red">*</i></p>
            <input type="text" v-model="stand.email">
          </li>
          <li class="item">
            <p class="title">Website<i class="red">*</i></p>
            <input type="text" v-model="stand.website">
          </li>
          <li class="item">
            <p class="title">Fax</p>
            <input type="text" v-model="stand.fax">
          </li>
        </ul>
        <!-- 产品种类 -->
        <div class="product_box">
          <p class="title">Product Category</p>
          <ul class="check_list">
            <li class="item">
              <span :class="proClassType(0)"  v-on:click="switchProduct(0)"></span>
              <span class="text">Pre-Press/Software/Design</span>
            </li>
            <li class="item">
              <span :class="proClassType(1)" v-on:click="switchProduct(1)"></span>
              <span class="text">Digital Print Equipment & Accessory, Printing Substrates</span>
            </li>  
            <li class="item">
              <span :class="proClassType(2)" v-on:click="switchProduct(2)"></span>
              <span class="text">Digital Print Equipment & Accessory, Heat Transfer Production</span>
            </li>  
            <li class="item">
              <span :class="proClassType(3)" v-on:click="switchProduct(3)"></span>
              <span class="text">Ink Systems</span>
            </li>  
            <li class="item">
              <span :class="proClassType(4)" v-on:click="switchProduct(4)"></span>
              <span class="text">Printing Substrates</span>
            </li> 
            <li class="item">
              <span :class="proClassType(5)" v-on:click="switchProduct(5)"></span>
              <span class="text">Laser Cutting Machines / Engraving Machines / Accessory</span>
            </li>  
            <li class="item">
              <span :class="proClassType(6)" v-on:click="switchProduct(6)"></span>
              <span class="text">Signage & Light Box</span>
            </li> 
            <li class="item">
              <span :class="proClassType(7)" v-on:click="switchProduct(7)"></span>
              <span class="text">Display System</span>
            </li>  
            <li class="item">
              <span :class="proClassType(8)" v-on:click="switchProduct(8)"></span>
              <span class="text">Other Pop Product</span>
            </li> 
            <li class="item">
              <span :class="proClassType(9)" v-on:click="switchProduct(9)"></span>
              <span class="text">Books / Software / Gift</span>
            </li>  
            <li class="item">
              <span :class="proClassType(10)" v-on:click="switchProduct(10)"></span>
              <span class="text">Media / Association</span>
            </li> 
            <li class="item">
              <span :class="proClassType(11)" v-on:click="switchProduct(11)"></span>
              <span class="text">Others, please specify.</span>
            </li>  
            <li class="item" v-show="proOthersState">
              <input type="text" v-model="proOthers">
            </li>                                                 
          </ul>
        </div>
        <!-- 目标客户 -->
        <div class="product_box">
          <p class="title">Your Target Clients</p>
          <ul class="check_list">
            <li class="item">
              <span :class="cliClassType(0)"  v-on:click="switchClients(0)"></span>
              <span class="text">Large Scale Enterprise & Other Advertisers</span>
            </li>
            <li class="item">
              <span :class="cliClassType(1)" v-on:click="switchClients(1)"></span>
              <span class="text">Shopping Mall/Hotel/Property Management</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(2)" v-on:click="switchClients(2)"></span>
              <span class="text">Individual Advertiser</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(3)" v-on:click="switchClients(3)"></span>
              <span class="text">Agent/ Distributor/ Trading Company</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(4)" v-on:click="switchClients(4)"></span>
              <span class="text">Public Relations & Media Company</span>
            </li> 
            <li class="item">
              <span :class="cliClassType(5)" v-on:click="switchClients(5)"></span>
              <span class="text">Sign Manufacturer (Advertisement & Signage Design / Fabrication / Materials / Production Company)</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(6)" v-on:click="switchClients(6)"></span>
              <span class="text">Associations/ University/ Research Institute</span>
            </li> 
            <li class="item">
              <span :class="cliClassType(7)" v-on:click="switchClients(7)"></span>
              <span class="text">Airport/Port/Highway/Railway Station/Bus Station/Transit Hub</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(8)" v-on:click="switchClients(8)"></span>
              <span class="text">System Integrators</span>
            </li> 
            <li class="item">
              <span :class="cliClassType(9)" v-on:click="switchClients(9)"></span>
              <span class="text">Architectural and Decorative Lighting/ Urban Landscape Illumination / Garden Design Company</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(10)" v-on:click="switchClients(10)"></span>
              <span class="text">Retail</span>
            </li> 
            <li class="item">
              <span :class="cliClassType(11)" v-on:click="switchClients(11)"></span>
              <span class="text">Municipal Traffic Administration/ Public Works/ Governmental Procurement Department</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(12)" v-on:click="switchClients(12)"></span>
              <span class="text">Stage/ KTV/ Entertainment/ Recreational Facility Operators / Film, Television, Animation Company</span>
            </li>  
            <li class="item">
              <span :class="cliClassType(13)" v-on:click="switchClients(13)"></span>
              <span class="text">Others, please specify</span>
            </li>           
            <li class="item" v-show="cliOthersState">
              <input type="text" v-model="cliOthers">
            </li>                                                 
          </ul>
        </div>      
        <!-- 展台种类 -->
        <div class="booth_box">
          <p class="title">Your Target Booth Type</p>
          <ul class="check_list">
            <li class="item">
              <span class="unselected" :class="{selected: boothClassType == 0}" v-on:click="switchBooth(0)"></span>
              <span class="text">Deluxe Shell Stand</span>
            </li>
            <li class="item">
              <span class="unselected" :class="{selected: boothClassType == 1}" v-on:click="switchBooth(1)"></span>
              <span class="text">Raw Space Stand</span>
            </li>                                                
          </ul>
          <ul class="input_list">
            <li class="item">
              <p class="title">Number of booth(s) you need</p>
              <input type="text" v-model="booth.number">
            </li>
            <li class="item">
              <p class="title">Length (m)</p>
              <input type="text" v-model="booth.length">
            </li>
            <li class="item">
              <p class="title">Width (m)</p>
              <input type="text" v-model="booth.width">
            </li>                
          </ul>
          <p class="tips">Remarks: please fill in the above information in detail and submit it after confirmation. We will contact you as soon as possible. Thank you!</p>       
        </div>
        <!-- 按钮列表 -->
        <div class="bth_list">
          <span class="bth submit">Submit</span>
          <span class="bth reset">Reset</span>
        </div>      
      </div>
    </div> 
  </div> 
  <!-- 公共部分组件 -->
  <myCommon></myCommon>  
  <!-- 底部页脚组件 -->
  <myBottom></myBottom>
  <div v-if="isPC">
    <!-- 右侧悬浮组件 -->
    <mySuspension></mySuspension> 
  </div>
</div>
</template>

<script>
import myHeader from "../components/header";
import myBanner from "../components/banner";
import myCommon from "../components/common";
import myBottom from "../components/bottom";
import mySuspension from "../components/suspension";
import contactVue from './contact.vue';
// import store from "../store";
// import tokyo from "../js/tool";
// import getModel from "../models/model";

// let monitorLoginModel = getModel("monitorLoginModel");
// let sendPhoneMsgModel = getModel("sendPhoneMsgModel");

export default {
  name: "Stand",
  data() {
    return {
      isPC: '',
      language: '',
      stand: {
        name: "",
        person: "",
        phone: "",
        mobile: "",
        email: "",
        website: "",
        fax: "",
      },
      productState: [],
      proOthersState: false,
      proOthers: "",
      cliductState: [],
      cliOthersState: false,
      cliOthers: "",      
      boothClassType: 0,
      booth: {
        number: '',
        length: '',
        width: ''
      }
    };
  },
  components: {
    myHeader,
    myBanner,
    myBottom,
    myCommon,
    mySuspension
  },
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
    console.log(this.language,this.isPC);
  },
  methods: {
    proClassType: function(index) {
      // 产品select 类判断
      if(!!this.productState[index]){
        return "selected";
      }else{
        return "unselected";
      }
    },
    switchProduct: function(index){
      // 切换选中状态
      if(!!this.productState[index]){
        this.$set(this.productState, index, 0);
      }else{
        this.$set(this.productState, index, 1);
      };
      // others open input
      if(index == 11){
        this.proOthersState = !this.proOthersState;
      };
    },
    cliClassType: function(index) {
      // 目标select 类判断
      if(!!this.cliductState[index]){
        return "selected";
      }else{
        return "unselected";
      }
    },
    switchClients: function(index){
      // 切换目标选中状态
      if(!!this.cliductState[index]){
        this.$set(this.cliductState, index, 0);
      }else{
        this.$set(this.cliductState, index, 1);
      };
      // others open input
      if(index == 13){
        this.cliOthersState = !this.cliOthersState;
      };
    },    
    switchBooth: function(type){
      // 切换target booth
      this.boothClassType = type;
    }

  }
};
</script>

<style scoped lang="scss">
</style>
