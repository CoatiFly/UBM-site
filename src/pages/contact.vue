<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <myBanner></myBanner>
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content contact">
      <div class="text_box">
        <p class="title">CONTACT US</p>
        <p class="fonts">THE VENUE</p>
      </div>
      <div class="center_box">
        <div class="fonts_list_pc">
          <p class="fonts_left mt30">Food & Drink Expo 2020 takes place at the National Exhibition Centre (NEC), Birmingham, UK in Hall 2. The NEC is the UK's premier exhibition centre and is conveniently located with easy access from the whole of UK, Europe and the rest of the world.</p>
          <p class="fonts mt40">National Exhibition Centre (NEC)</p>
          <p class="fonts mt25">Birmingham</p>
          <p class="fonts mt25">West Midlands</p>
          <p class="fonts mt25">B40 1NT</p>
          <p class="fonts line_26 mt50">Tel: +44 (0) 121 780 4141</p>
          <p class="fonts line_26">Email: info@necgroup.co.uk</p>          
        </div>
        <div class="fonts_list_mobile">
          <p class="fonts">Food & Drink Expo 2020 takes place at the National Exhibi-  </p>
          <p class="fonts">tion Centre (NEC), Birming,</p>
          <p class="fonts">heniently located with easy access from the whole of UK,</p>
          <p class="fonts">Europe and the rest of the world.</p>
          <p class="fonts margin">National Exhibition Centre (NEC)</p>
          <p class="fonts">Birmingham</p>
          <p class="fonts">West Midlands</p>
          <p class="fonts">B40 1NT</p>
          <p class="fonts">Tel: +44 (0) 121 780 4141</p>
          <p class="fonts">Email: info@necgroup.co.uk</p>          
        </div>
        <div class="map_box"></div>
        <div class="texts">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future. </div>
        <div class="map_box"></div>
        <div class="texts">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future. </div>
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
// import store from "../store";
// import tokyo from "../js/tool";
// import getModel from "../models/model";

// let monitorLoginModel = getModel("monitorLoginModel");
// let sendPhoneMsgModel = getModel("sendPhoneMsgModel");

export default {
  name: "Contact",
  data() {
    return {
      isPC: '',
      language: '',
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
