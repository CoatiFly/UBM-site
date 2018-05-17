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
  <div class="page_content sessions">
    <div class="text_box">
      <p class="title">2018 SESSIONS</p>
      <p class="second_title">WELCOME TO THE UK FOOD SHOWS</p>
      <p class="details">Providing the number one route to the UK food and drink market. Join the UK’s most  five shows covering the complete supply cex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future.</p>
    </div>
    <!-- sessions 列表 -->
    <ul class="sessions_list">
      <li class="item" :class="{cur: currentTab == 19}" v-on:click="SwitchTab(19)">September 19</li>
      <li class="item" :class="{cur: currentTab == 20}" v-on:click="SwitchTab(20)">September 20</li>
      <li class="item" :class="{cur: currentTab == 21}" v-on:click="SwitchTab(21)">September 21</li>
    </ul>
    <div class="sessions_box">
      <p class="tips">Wednesday, September {{currentTab}}</p>
      <div class="speaker_item">
        <p class="time">10:00 a.m. - 11:30 a.m.</p>
        <p class="text">White Paper Release of SIGN and Advertising Industry</p>
        <ul class="speaker_list">
          <li class="item">
            <div class="img"></div>
            <div class="recommend">
              <p class="name line1">Speaker's name</p>
              <p class="tips line2">Social Marketing Social......</p>
              <p class="addr line2">Shanghai East Asia United International ...</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="speaker_item">
        <p class="time">10:00 a.m. - 11:30 a.m.</p>
        <p class="text">White Paper Release of SIGN and Advertising Industry</p>
        <ul class="speaker_list">
          <li class="item" v-for="(item, index) in items" v-on:click="SwitchLayou(index)">
            <div class="img"></div>
            <div class="recommend">
              <p class="name line1">Speaker's name</p>
              <p class="tips line2">Social Marketing Social......</p>
              <p class="addr line2">Shanghai East Asia United International ...</p>
            </div>
          </li>
        </ul>
      </div>
      <p class="speaker_title">Coffee Break / VIP Lunch</p> 
      <div class="speaker_item">
        <p class="time">13:00 p.m. - 15:30 p.m.</p>
        <p class="text">White Paper Release of SIGN and Advertising Industry</p>
        <ul class="speaker_list">
          <li class="item" v-for="(item, index) in items" v-on:click="SwitchLayou(index)">
            <div class="img"></div>
            <div class="recommend">
              <p class="name line1">Speaker's name</p>
              <p class="tips line2">Social Marketing Social......</p>
              <p class="addr line2">Shanghai East Asia United International ...</p>
            </div>
          </li>
        </ul>
      </div>      
    </div>
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
  name: "Sessions",
  data() {
    return {
      items: [0,1,2],
      currentTab: 19,
      index: 0,
      speakerState: false
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
    SwitchLayou: function(index){
      this.index = index;
      // 动态切换状态
      this.speakerState = !this.speakerState;
    },
    SwitchTab: function(index){
      this.currentTab = index;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
