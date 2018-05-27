<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <myBanner></myBanner>
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content products">
      <div class="text_box">
        <p class="title">2018 VISIT</p>
      </div>
      <!-- 搜索组件 -->
      <div class="search_box">
        <div class="duble_input">
          <input type="text" class="text_ipt fl" v-model="componyName" placeholder="Compony Name">
          <input type="text" class="text_ipt fr" v-model="exhibitNumber" placeholder="Exhibit Number">
        </div>
        <input class="search_ipt" type="text" v-model="searchName" placeholder="Pre-Press/Software/Design">
        <div class="serach_bth">
          <p class="texts">Search</p>
        </div>
      </div>
      <!-- visit 列表 -->
      <ul class="visit_list">
        <li class="item" v-for="item in items">
          <div class="logo_box">{{item}}</div>
          <div class="fonts_box">
            <p class="title line2">Shanghai East Asia United International Trade joint-stock</p>
            <p class="number">WXZ000016489633</p>
            <p class="tips line2">Digital Print Equipment & Accessory, Heat Transfer Production</p>
            
          </div>          
        </li>
      </ul>
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
import weChat from "../components/wechat";
// import store from "../store";
// import tokyo from "../js/tool";
// import getModel from "../models/model";

// let monitorLoginModel = getModel("monitorLoginModel");
// let sendPhoneMsgModel = getModel("sendPhoneMsgModel");

export default {
  name: "Exhibitiors",
  data() {
    return {
      isPC: '',
      language: '',
      items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      searchName: "",
      componyName: '',
      exhibitNumber: ''
    };
  },
  components: {
    myHeader,
    myBanner,
    myBottom,
    myCommon,
    mySuspension,
    weChat
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

  }
};
</script>

<style scoped lang="scss">

</style>

