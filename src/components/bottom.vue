<template>
<div class="out-side">
  <!-- 底栏 -->
  <div class="page_bottom_box">
    <div class="bottom_center">
      <ul class="nav_list">
        <li class="item"><span>HOME</span></li>
        <li class="item long"><span>EXHIBIT</span></li>
        <li class="item"><span>VISIT</span></li>
        <li class="item red"><span>FSA</span></li>
        <li class="item long"><span>TRAVEL</span></li>
        <li class="item"><span>CONTACT US</span></li>
      </ul> 
      <ul class="bth_list">
        <li class="item">
          <span class="bth blue_bg">BOOK A STAND</span>
        </li>
        <li class="logo">
          <img src="../assets/index_46.png" alt="">
        </li>
        <li class="item">
          <span class="bth red_bg">REGISTER INTEREST</span>
        </li>        
      </ul>
      <ul class="link_list">
        <li class="item wechat" v-on:click="openWechatLayou"></li>
        <li class="item facebook">
          <a :href="facebookUrl" target="_blank"></a>
        </li>
        <li class="item rss" v-on:click="openRssLayou"></li>
      </ul>
    </div>
    <div class="authentication"></div> 
    <div class="reference">隐私政策 | Copyright 2011 by UBM Trust Co Ltd (All Rights Reserved) 粤ICP备16120933号-2 粤公网安备 44010602002114号</div>    
  </div> 
  <!-- RSS 弹层组件 -->
  <subScribe ref="rssOrder"></subScribe>   
  <!-- wechat 弹层组件 -->
  <weChat ref="wechat"></weChat> 
</div>
</template>

<script>
import subScribe from "../components/subscribe";
import weChat from "../components/wechat";

export default {
  name: "myBottom",
  data() {
    return {
      facebookUrl: 'http://new.facebook.com/'
    };
  },
  components: {
    subScribe,
    weChat
  },
  mounted() {

  },
  methods: {
    openRssLayou: function(){
      this.$refs.rssOrder.show();
    },
    openWechatLayou: function(){
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

<style scoped>

</style>
