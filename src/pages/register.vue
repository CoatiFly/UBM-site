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
        <p class="title">FOOD & DRINK EXPO 2018 IS NOW CLOSED</p>
        <p class="fonts mt30">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for </p>
      </div>
      <div class="center_box">
        <div class="bth_register">
          <a :href="pcUrl" class="block" target="_blank" v-if="isPc">REGISTER</a>
          <a :href="mobileUrl" class="block" target="_blank" v-if="!isPc">REGISTER</a>
        </div>
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
  name: "Awards",
  data() {
    return {
      isPc: true,
      adItems: [1, 2],
      pcUrl: 'http://www.ubmtrust.com?class=pc',
      mobileUrl: 'http://www.ubmtrust.com?class=mobile'
    };
  },
  components: {
    myHeader,
    myBottom,
    myCommon,
    mySuspension
  },
  mounted() {
    this.checkIsPc();
  },
  methods: {
    checkIsPc: function() {
      // 判断当前环境
      console.log(this.isPc);
     
    },
  }
};
</script>

<style scoped lang="scss">
.page_content .text_box .title {
  font-size: 30px;
}
.bth_register {
  width: 380px;
  height: 70px;
  line-height: 70px;
  font-size: 24px;
  color: #fff;
  background-color: #aa010e;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  margin: 0 auto;
  .block{
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
  }
}
.travel .center_box{
  margin-top: 80px;
}
</style>
