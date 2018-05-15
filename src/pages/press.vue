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
  <div class="page_content press">
    <div class="press_left">
      <div class="text_box">
        <p class="title">PRESS</p>
        <p class="fonts">THE VENUE</p>
        <p class="fonts fonts_left mt30">Food & Drink Expo 2020 takes place at the National Exhibition Centre (NEC), Birmingham, UK in Hall 2. The NEC is the UK's premier exhibition centre and is conveniently located with easy access from the whole of UK, Europe and the rest of the world.</p>
      </div>
      <!-- press 列表 -->
      <ul class="press_list">
        <li class="item" v-for="item in items">
          <div class="logo_box">{{item}}</div>
          <div class="fonts_box">
            <p class="title line2">Food & Drink Expo 2018 to Address Industry ... Co.Ltd</p>
            <p class="details line3">The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to ...</p>
            <p class="date">2018.05.03</p>
          </div>          
        </li>
      </ul>
    </div>
    <div class="press_right">
      <ul class="adver_list">
        <li class="item" v-for="item in adItems">
          <div class="logo_box">{{item}}</div>
          <p class="title line2">banner wordsbanner wordsbanner wordsbanner wordsbanner wordsbanner ...</p>
        </li>
      </ul>
    </div>

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
      items: [1,2,3,4,5,6,7,8,9,10,11,12],
      adItems: [1,2,3,4]
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
