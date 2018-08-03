<template>
<div class="out-side">
  <!-- 底栏 -->
  <div :class="isPC ? 'page_bottom_box' : 'mobile_page_bottom_box'">
    <div class="bottom_center">
      <ul class="nav_list">
        <li class="item"><span v-on:click="goPage('index')">{{$t("footing.home")}}</span></li>
        <li class="item long"><span v-on:click="goPage('exhibit')">{{$t("footing.exhibit")}}</span></li>
        <li class="item"><span v-on:click="goPage('visit')">{{$t("footing.visit")}}</span></li>
        <li class="item red"><span v-on:click="goPage('sessions')">{{$t("footing.fsa")}}</span></li>
        <li class="item long"><span v-on:click="goPage('travel')">{{$t("footing.travel")}}</span></li>
        <li class="item"><span v-on:click="goPage('contact')">{{$t("footing.contact")}}</span></li>
      </ul> 
      <ul class="bth_list">
        <li class="item">
          <span class="bth blue_bg" v-on:click="goPage('stand')">{{$t("header.stand")}}</span>
        </li>
        <li class="logo">
          <img src="../assets/index_46.png" alt="">
        </li>
        <li class="item red_right">
          <span class="bth red_bg_aa" v-on:click="goPage('register')">{{$t("header.register")}}</span>
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
    <div class="reference" v-if="isPC">{{$t("footing.copyright")}}{{$t("footing.records")}}</div>    
    <div class="reference" v-else>
      <p class="fonts">{{$t("footing.copyright")}}</p>
      <p class="fonts">{{$t("footing.records")}}</p>
    </div>    
  </div> 
  <!-- RSS 弹层组件 -->
  <subScribe ref="rssOrder"></subScribe>   
  <!-- wechat 弹层组件 -->
  <weChat ref="wechat"></weChat> 
</div>
</template>

<script>
import tokyo from "../common/util";
import subScribe from "../components/subscribe";
import weChat from "../components/wechat";

export default {
  name: "myBottom",
  data() {
    return {
      facebookUrl: 'https://www.facebook.com/ubmTrust/',
      isPC: ''
    };
  },
  components: {
    subScribe,
    weChat
  },
  mounted() {
    this.isPC = this.$store.state.isPC;
  },
  methods: {
    goPage: function(name) {
      // 跳转页面
      tokyo.go(name);
    },
    openRssLayou: function(){
      this.$refs.rssOrder.show();
    },
    openWechatLayou: function(){
      // 打开微信二维码弹层
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
