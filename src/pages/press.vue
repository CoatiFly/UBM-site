<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content press">
      <div class="press_left">
        <div class="text_box">
          <p class="title">{{language == "en" ? pressData.caption_english : pressData.caption}}</p>
          <p class="fonts">{{language == "en" ? pressData.description_english : pressData.description}}</p>
          <p class="fonts fonts_left mt30" v-html="language == 'en' ? pressData.content_english : pressData.content"></p>          
        </div>
        <!-- press 列表 -->
        <ul class="press_list">
          <li class="item" v-for="item in newsList" :key="item.id">
            <div class="news_wall" v-on:click="goDetailsPage(item.id)">
              <div class="logo_box"><img :src="item.picture" alt="新闻图片"></div>
              <div class="fonts_box">
                <p class="title line2">{{language == "en" ? item.caption_english : item.caption}}</p>
                <p class="details line3">{{language == "en" ? item.description_english : item.description}}</p>
                <p class="date">{{item.create_time}}</p>
              </div> 
            </div>
          </li>
        </ul>
      </div>
      <!-- 广告列表 -->
      <div class="press_right" v-if="isPC">
        <ul class="adver_list">
          <li class="item" v-for="item in SliderList" :key="item.id">
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
            <li class="item" v-for="item in SliderList" :key="item.id">
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
</div>

</template>

<script>

import tokyo from "../common/util";
import getModel from "../models/model";
let getNewsListModel = getModel("getNewsListModel");
let getSlideByGroupModel = getModel("getSlideByGroupModel");
let getNewsByIdModel = getModel("getNewsByIdModel");

export default {
  name: "Press",
  data() {
    return {
      language: '',
      isPC: '',     
      SliderList: [],
      newsList: [],
      pressData: ''
    };
  },
  components: {
    
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
      this.getPageContent();
    },
    goDetailsPage: function(id){
      // 跳转新闻详情
      tokyo.go('news/'+ id);
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
    },
    getPageContent: function(){
      // 获取页面内容
      let params = {
        id: 15,
      }
      getNewsByIdModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.pressData = info.data;
          console.log("关于我们",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
