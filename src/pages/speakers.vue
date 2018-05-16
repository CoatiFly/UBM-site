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
  <div class="page_content speakers">
    <div class="text_box">
      <p class="title">2018 SPEAKERS</p>
    </div>
    <!-- speakers 列表 -->
    <ul class="speakers_list">
      <li class="item" v-for="(item, index) in items" v-on:click="SwitchLayou(index)">
        <div class="logo_box">{{item}}</div>
        <div class="fonts_box">
          <p class="title line1">Speaker's name</p>
          <p class="tips line1">Social Marketing Social......</p>
          <p class="details line2">Shanghai East Asia United International ...</p>
        </div>          
      </li>
    </ul>
  </div>  
  <!-- introduction 弹层 -->
  <div class="layou_fixed" v-if="speakerState">
    <div class="speaker_qrcode fixed_pos">
      <div class="close" v-on:click="SwitchLayou"></div>
      <div class="title">Introduction{{index}}</div>
      <div class="text">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future.</div>
      <div class="text">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. </div>
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
  name: "Spakers",
  data() {
    return {
      items: [0,1,2,3,4,5,6,7,8,9],
      speakerState: false,
      index: 0
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
    SwitchLayou: function(index){
      this.index = index;
      // 动态切换状态
      this.speakerState = !this.speakerState;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
