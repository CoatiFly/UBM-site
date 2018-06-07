<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content travel">
      <div class="trave_left">
        <div class="text_box">
          <p class="title">{{language == "en" ? registerData.caption_english : registerData.caption}}</p>
          <p class="fonts">{{language == "en" ? registerData.description_english : registerData.description}}</p>
          <p class="fonts mt30" v-html="language == 'en' ? registerData.content_english : registerData.content"></p>
        </div>
        <div class="center_box">
          <div class="bth_register">
            <a :href="pcUrl" class="block" target="_blank" v-if="isPC">{{$t("register.button")}}</a>
            <a :href="mobileUrl" class="block" target="_blank" v-if="!isPC">{{$t("register.button")}}</a>
          </div>
        </div>    
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

import getModel from "../models/model";
let getSlideByGroupModel = getModel("getSlideByGroupModel");
let getNewsByIdModel = getModel("getNewsByIdModel");

export default {
  name: "Register",
  data() {
    return {
      language: '',
      isPC: '',  
      SliderList: [],
      registerData: '',
      pcUrl: 'http://www.ubmtrust.com?class=pc',
      mobileUrl: 'http://www.ubmtrust.com?class=mobile'
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
    this.getSliderList();
    this.getPageContent();
  },
  methods: {
    getSliderList: function(){
      // 获取广告列表
      let params = {
        gid: 1,
      }
      getSlideByGroupModel.$post(params).then((info) => {
        if (info.status == 1) {
          if(this.isPC){
            this.SliderList = info.data.slice(0,2);
          }else{
            this.SliderList = info.data;
          }
          console.log("广告列表",info.data);
        }
      });      
    },
    getPageContent: function(){
      // 获取页面内容
      let params = {
        id: 13,
      }
      getNewsByIdModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.registerData = info.data;
          console.log("观众登记",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
