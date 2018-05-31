<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content contact">
      <div class="text_box">
        <p class="title">{{language == "en" ? newsData.caption_english : newsData.caption}}</p>
        <p class="fonts">{{newsData.update_time}}</p>
      </div>
      <div class="center_box">
        <div class="fonts_list_pc">
          <p class="fonts_left mt30">{{language == "en" ? newsData.description_english : newsData.description}}</p>        
        </div>
        <div class="fonts_list_mobile">
          <p class="fonts">{{language == "en" ? newsData.description_english : newsData.description}}</p>        
        </div>
        <div class="texts" v-html="language == 'en' ? newsData.content_english : newsData.content"></div>
      </div>
    </div> 
  </div>    


</div>
</template>

<script>

import getModel from "../models/model";
let getNewsByIdModel = getModel("getNewsByIdModel");

export default {
  name: "News",
  data() {
    return {
      isPC: "",
      language: "",
      newsId: '',
      newsData: {}
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
    this.newsId = this.$route.params.newsId;
    this.getNewsCenter();
    console.log(this.language, this.isPC);
  },
  methods: {
    getNewsCenter: function() {
      // 获取新闻内容
      let params = {
        id: Number(this.newsId)
      };
      getNewsByIdModel.$post(params).then(info => {
        if (info.status == 1) {
          this.newsData = info.data;
          console.log("新闻详情", info.data);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
