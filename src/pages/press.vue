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
        <li class="item" v-for="item in newsList">
          <div class="logo_box"><img :src="item.picture" alt="新闻图片"></div>
          <div class="fonts_box">
            <p class="title line2">{{language == "en" ? item.caption_english : item.caption}}</p>
            <p class="details line3">{{language == "en" ? item.description_english : item.description}}</p>
            <p class="date">{{item.create_time}}</p>
          </div>          
        </li>
      </ul>
    </div>
    <div class="press_right">
      <ul class="adver_list">
        <li class="item" v-for="item in SliderList">
          <a class="blank_box" :href="item.linker" target="_blank">
            <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
            <p class="title line2">{{item.caption}}</p>
          </a>
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
import weChat from "../components/wechat";

import getModel from "../models/model";
let getNewsListModel = getModel("getNewsListModel");
let getSlideByGroupModel = getModel("getSlideByGroupModel");

export default {
  name: "Contact",
  data() {
    return {
      adItems: [0,1,2,3],
      SliderList: [],
      newsList: [],
      language: '',
      isPC: '',
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
    this.init();
  },
  methods: {
    init: function(){
      this.getNewsList();
      this.getSliderList();
    },
    getNewsList: function() {
      // 获取新闻列表
      let params = {
        page: 1,
        cid: '',
        rownum: 12
      }
      getNewsListModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.newsList = info.data.data;
          console.log("新闻列表",info.data.data);
        }
      });
    },
    getSliderList: function(){
      // 获取广告列表
      let params = {
        gid: 1,
      }
      getSlideByGroupModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.SliderList = info.data;
          console.log("广告列表",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
