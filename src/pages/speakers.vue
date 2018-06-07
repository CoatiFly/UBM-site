<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content speakers">
      <div class="text_box">
        <p class="title">{{$t("speakers.title")}}</p>
      </div>
      <!-- speakers 列表 -->
      <ul class="speakers_list" v-if="isPC">
        <li class="item" v-for="(item, index) in speakerList" :key="item.id" v-on:click="SwitchLayou(index)">
          <div class="logo_box" v-bind:style="{backgroundImage: 'url(' + item.photo + ')'}"></div>
          <div class="fonts_box">
            <p class="title line1">{{language == "en" ? item.english_name : item.chinese_name}}</p>
            <p class="tips line1">{{language == "en" ? item.exhibitor_category_ename : item.exhibitor_category_cname}}</p>
            <p class="details line2">{{language == "en" ? item.company_name_english : item.company_name_chinese}}</p>
          </div>          
        </li>
      </ul>
      <!-- speakers 列表 -->
      <ul class="speakers_list" v-else>
        <li class="item" v-for="(item, index) in speakerList" :key="item.id" v-on:click="SwitchLayou(index)">
          <div class="logo_box" v-bind:style="{backgroundImage: 'url(' + item.photo + ')'}"></div>
          <div class="fonts_box">
            <p class="title line1">{{language == "en" ? item.english_name : item.chinese_name}}</p>
            <p class="tips line2">{{language == "en" ? item.exhibitor_category_ename : item.exhibitor_category_cname}}</p>
            <p class="details line2">{{language == "en" ? item.company_name_english : item.company_name_chinese}}</p>
          </div>          
        </li>
      </ul>      
    </div>  
    <!-- introduction 弹层 -->
    <div class="layou_fixed" v-if="speakerState" @touchmove.prevent>
      <div class="speaker_qrcode fixed_pos">
        <div class="close" v-on:click="SwitchLayou"></div>
        <div class="title">{{language == "en" ? popupData.english_name : popupData.chinese_name}}</div>
        <div class="text" v-html="language == 'en' ? popupData.introduction_english : popupData.introduction_chinese"></div>
      </div>
    </div>
  </div>


</div>

</template>

<script>

import getModel from "../models/model";
let getSpeakerListModel = getModel("getSpeakerListModel");

export default {
  name: "Spakers",
  data() {
    return {
      language: '',
      isPC: '',
      speakerList: [],
      popupData: '',
      speakerState: false,
      index: 0
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
    this.getSpeakerList();
  },
  methods: {
    SwitchLayou: function(index){
      this.index = index;
      this.popupData = this.speakerList[index];
      // 动态切换状态
      this.speakerState = !this.speakerState;
    },
    getSpeakerList: function(){
      // 获取嘉宾列表
      let params = {
        eid: '',
        page: '1',
        rownum: 10
      }
      getSpeakerListModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.speakerList = info.data.data;
          console.log("展会信息列表",info.data.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
