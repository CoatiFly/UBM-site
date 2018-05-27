<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <myBanner></myBanner>
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
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
      <!-- 广告列表 -->
      <div class="press_right" v-if="isPC">
        <ul class="adver_list">
          <li class="item" v-for="item in SliderList">
            <a class="blank_box" :href="item.linker" target="_blank">
              <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
              <p class="title line2">{{item.caption}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 广告列表 -->
      <div class="press_right" v-else>
        <div class="over_x">
          <ul class="adver_list" :style="{width: SliderList.length * 2.24 + 0.2 + 'rem'}">
            <li class="item" v-for="item in SliderList">
              <a class="blank_box" :href="item.linker" target="_blank">
                <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
                <p class="title line2">{{item.caption}}</p>
              </a>
            </li>
          </ul>
        </div>
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

import getModel from "../models/model";
let getNewsListModel = getModel("getNewsListModel");
let getSlideByGroupModel = getModel("getSlideByGroupModel");

export default {
  name: "Press",
  data() {
    return {
      language: '',
      isPC: '',     
      SliderList: [],
      newsList: []
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
