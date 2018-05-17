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
  <div class="page_content travel">
    <div class="trave_left">
      <div class="text_box">
        <p class="title">TRAVEL & ACCOMMODATION</p>
        <p class="fonts">THE VENUE</p>
        <p class="fonts fonts_left mt30">Food & Drink Expo 2020 takes place at the National Exhibition Centre (NEC), Birmingham, UK in Hall 2. The NEC is the UK's premier exhibition centre and is conveniently located with easy access from the whole of UK, Europe and the rest of the world.</p>
        <p class="fonts mt40">National Exhibition Centre (NEC)</p>
        <p class="fonts mt25">Birmingham</p>
        <p class="fonts mt25">West Midlands</p>
        <p class="fonts mt25">B40 1NT</p>
        <p class="fonts line_26 mt50">Tel: +44 (0) 121 780 4141</p>
        <p class="fonts line_26">Email: info@necgroup.co.uk</p>
      </div>
      <div class="center_box">
        <div class="map_box"></div>
        <div class="fonts">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future. </div>
        <div class="map_box"></div>
        <div class="fonts">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future. </div>
      </div>    
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
</div>

</template>

<script>
import myHeader from "../components/header";
import myCommon from "../components/common";
import myBottom from "../components/bottom";
import mySuspension from "../components/suspension";
// import store from "../store";
// import tokyo from "../js/tool";
// import getModel from "../models/model";

// let monitorLoginModel = getModel("monitorLoginModel");
// let sendPhoneMsgModel = getModel("sendPhoneMsgModel");

export default {
  name: "Travel",
  data() {
    return {
      adItems: [1,2,3,4]
    };
  },
  components: {
    myHeader,
    myBottom,
    myCommon,
    mySuspension
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
