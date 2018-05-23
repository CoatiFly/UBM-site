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
  <div class="page_content">
    <div class="text_box">
      <p class="title">WELCOME TO THE SIGN CHINA</p>
      <p class="fonts"><span class="bold">SIGN CHINA</span> is a one-stop platform for the global sign community to source the latest model of inkjet printer, laser engraver, light box, traditional signage, digital signage, advertising display, <span class="bold">LED</span> illuminant, <span class="bold">LED</span> display, testing device and control system.</p>
      <p class="fonts mt20">International buyers and industry professionals gather here annually to look for Original Equipment Manufacturers (<span class="bold">OEM</span>) or solution providers for outdoor advertising, high-end conferencing or interactive digital signage.</p>
    </div>
    <div class="list_block">
      <ul class="shell">
        <li class="item">
          <img src="../assets/index_29.png" alt="">
        </li>
        <li class="item">
          <img src="../assets/index_31.png" alt="">
        </li>
        <li class="item">
          <img src="../assets/index_34.png" alt="">
        </li>
        <li class="item red_bg">
          <div class="open_time">
            <p class="title">OPENING TIMES</p>
            <ul class="time_box">
              <li class="time_list">Monday 30th March 2020: 10am – 5pm</li>
              <li class="time_list">Tuesday 31st March 2020: 10am – 5pm</li>
              <li class="time_list">Wednesday 1st April 2020: 10am – 4pm</li>
            </ul>
          </div>
        </li>
        <li class="item">
          <ul class="new_list">
            <li class="list" v-for="item in newsList">
              <div class="img">
                <img :src="item.picture" alt="新闻图片">
              </div>
              <div class="text">
                <p class="title">{{language == "en" ? item.caption_english : item.caption}}</p>
                <p class="fonts">{{language == "en" ? item.description_english : item.description}}</p>
              </div>
            </li>           
          </ul>
        </li>
        <li class="item red_bg">
          <div class="link_us">
            <p class="title">CONNECT WITH US</p>
            <ul class="link_list">
              <li class="wechat" v-on:click="openWechatLayou"></li>
              <li class="facebook">
                <a :href="facebookUrl" target="_blank"></a>
              </li>
            </ul>
          </div>         
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

import tokyo from "../common/util";
import getModel from "../models/model";
// let monitorLoginModel = getModel("monitorLoginModel");
let getNewsListModel = getModel("getNewsListModel");

export default {
  name: "Index",
  data() {
    return {
      facebookUrl: "http://new.facebook.com/",
      signChinaUrl: "http://www.signchina-sh.com/en-us/",
      digitalUrl: "http://www.digitalsignage-sh.com/en-us",
      ledChinaUrl: "http://www.ledchina-sh.com/en-us/",
      language: '',
      isPC: '',
      newsList: []
    };
  },
  components: {
    myHeader,
    myBottom,
    myCommon,
    mySuspension,
    weChat
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
    this.getNewsList();
  },
  methods: {
    openWechatLayou: function() {
      // 显示微信二维码弹层
      this.$refs.wechat.show();
    },
    getNewsList: function() {
      // 获取新闻列表
      let params = {
        page: 1,
        cid: '',
        rownum: 20
      }
      getNewsListModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.newsList = info.data.data.slice(0,2);
          console.log("新闻列表",info.data.data);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
