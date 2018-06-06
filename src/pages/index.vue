<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content">
      <div class="text_box">
        <p class="title">{{$t("index.title")}}</p>
        <p class="fonts">{{$t("index.second")}}</p>
        <p class="fonts mt20">{{$t("index.three")}}</p>
      </div>
      <div class="list_block">
        <ul class="shell">
          <li class="item title_list visit center" v-if="!isPC && language == 'en'" v-on:click="goPage('travel')"><p>WHY<br/>VISIT</p></li>
          <li class="item title_list visit center" v-else v-on:click="goPage('travel')"><p>{{$t("index.visit")}}</p></li>
          <li class="item title_list exhibit center" v-on:click="goPage('travel')"><p>{{$t("index.exhibit")}}</p></li>
          <li class="item title_list fsa center" v-on:click="goPage('sessions')"><p>{{$t("index.fsa")}}</p></li>
          <li class="item red_bg mobile_full">
            <div class="open_time">
              <p class="title">{{$t("index.times")}}</p>
              <ul class="time_box">
                <li class="time_list">{{$t("index.times1")}}</li>
                <li class="time_list">{{$t("index.times2")}}</li>
                <li class="time_list">{{$t("index.times3")}}</li>
              </ul>
            </div>
          </li>
          <li class="item mobile_full">
            <ul class="new_list">
              <li class="list" v-for="item in newsList" :key="item.id">
                <div class="img" v-bind:style="{backgroundImage: 'url(' + item.picture + ')'}"></div>
                <div class="text">
                  <p class="title">{{language == "en" ? item.caption_english : item.caption}}</p>
                  <p class="fonts">{{language == "en" ? item.description_english : item.description}}</p>
                </div>
              </li>           
            </ul>
          </li>
          <li class="item red_bg mobile_full">
            <div class="link_us">
              <p class="title">{{$t("index.connect")}}</p>
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
  </div>
  <!-- wechat 弹层组件 -->
  <weChat ref="wechat"></weChat> 
</div>

</template>

<script>

import weChat from "../components/wechat";
import tokyo from "../common/util";
import getModel from "../models/model";
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
    goPage: function(name) {
      // 跳转页面
      tokyo.go(name);
    },
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
