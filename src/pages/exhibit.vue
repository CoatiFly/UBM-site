<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content travel">
      <div class="trave_left">
        <div class="text_box">
          <p class="title">{{language == "en" ? exhibitData.caption_english : exhibitData.caption}}</p>
          <p class="fonts">{{language == "en" ? exhibitData.description_english : exhibitData.description}}</p>
        </div>
        <div class="center_box">
          <div class="fonts_list_pc" v-if="isPC" v-html="language == 'en' ? exhibitData.content_english : exhibitData.content"></div>
          <div class="fonts_list_mobile" v-else v-html="language == 'en' ? exhibitData.content_english : exhibitData.content"></div>          
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
let getSlideByGroupModel = getModel("getSlideByGroupModel");;
let getNewsByIdModel = getModel("getNewsByIdModel");

export default {
  name: "Exhibit",
  data() {
    return {
      language: '',
      isPC: '', 
      SliderList: [],
      exhibitData: ''
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
          this.SliderList = info.data;
          console.log("广告列表",info.data);
        }
      });      
    },
    getPageContent: function(){
      // 获取页面内容
      let params = {
        id: 18,
      }
      getNewsByIdModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.exhibitData = info.data;
          console.log("为何参展",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
