<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content contact">
      <div class="text_box">
        <p class="title">{{language == "en" ? contactData.caption_english : contactData.caption}}</p>
        <p class="fonts">{{language == "en" ? contactData.description_english : contactData.description}}</p>
      </div>
      <div class="center_box">
        <div class="fonts_list_pc" v-html="language == 'en' ? contactData.content_english : contactData.content"></div>
        <div class="fonts_list_mobile" v-html="language == 'en' ? contactData.content_english : contactData.content"></div>
      </div>
    </div> 
  </div>    
 

</div>
</template>

<script>
import getModel from "../models/model";
let getNewsByIdModel = getModel("getNewsByIdModel");

export default {
  name: "Contact",
  data() {
    return {
      isPC: '',
      language: '',
      contactData: ''
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
    this.getPageContent();
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
    },
    getPageContent: function(){
      // 获取页面内容
      let params = {
        id: 11,
      }
      getNewsByIdModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.contactData = info.data;
          console.log("关于我们",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
