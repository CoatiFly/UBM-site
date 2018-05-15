<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <div class="banner_box">
    <div class="center">
      <img src="../assets/index_26.png" alt="">
    </div>
  </div>
  <!-- 内容 -->
  <div class="page_content products">
    <div class="text_box">
      <p class="title">2018 PRODUCTS</p>
    </div>
     <!-- 搜索组件 -->
    <div class="search_box">
      <input class="search_ipt" type="text" v-model="searchName" placeholder="Product Name">
      <div class="serach_bth">
        <p class="texts">Search</p>
      </div>
    </div>
    <!-- products 列表 -->
    <ul class="products_list">
      <li class="item" v-for="item in items">
        <div class="logo_box">{{item}}</div>
        <div class="fonts_box">
          <p class="title line1">Product's name</p>
          <p class="details line3">Shanghai East Asia United International Trade joint-stock </p>
          <p class="number">WXZ000016489633</p>
        </div>          
      </li>
    </ul>
  </div>  
  <!-- 公共部分组件 -->
  <myCommon></myCommon>  
  <!-- 底部页脚组件 -->
  <myBottom></myBottom>
  <!-- 右侧悬浮组件 -->
  <mySuspension></mySuspension>
  <!-- wechat 弹层组件 -->
  <weChat ref="wechat"></weChat>
</div>

</template>

<script>
import myHeader from "../components/header";
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
  name: "Contact",
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10],
      searchName: "",
    };
  },
  components: {
    myHeader,
    myBottom,
    myCommon,
    mySuspension,
    weChat
  },
  mounted() {
  },
  methods: {
    openWechatLayou: function(){
      // 显示微信二维码弹层
      this.$refs.wechat.show();
    },
    SwitchLayou: function(name){
      // 动态切换状态
      this[name] = !this[name];
    },
    selectSexName: function(name){
      // 选择性别
      this.rssForm.sex = name;
      this.sexCheckStatus = false;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
