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
  <div class="page_content supporters">
    <div class="text_box">
      <p class="title">2018 SUPPORTERS</p>
    </div>
    <!-- supporters 列表 -->
    <ul class="supporters_list">
      <li class="item" v-for="item in 20">
        <div class="logo_box">{{item}}</div>
        <div class="link line1">www.foodanddrinkex.com</div>          
      </li>
    </ul>
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
  name: "Supporters",
  data() {
    return {
      index: 0
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
    }
  }
};
</script>

<style scoped lang="scss">

</style>
