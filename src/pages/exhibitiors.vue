<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content products">
      <div class="text_box">
        <p class="title">{{$t("exhibit.title")}}</p>
      </div>
      <!-- 搜索组件 -->
      <div class="search_box">
        <div class="duble_input">
          <input type="text" class="text_ipt fl" v-model="componyName" :placeholder="$t('exhibit.placeholder_compony')">
          <input type="text" class="text_ipt fr" v-model="exhibitNumber" :placeholder="$t('exhibit.placeholder_exhibit')">
        </div>
        <select class="search_ipt" v-model="selected">
          <option v-for="option in typeList" v-bind:value="option.value">
            {{ language == "en" ? option.english : option.chinese }}
          </option>
        </select>
        <div class="serach_bth" v-on:click="getExhibitorList">
          <p class="texts">{{$t("exhibit.button")}}</p>
        </div>
      </div>
      <!-- Exhibitor 列表 -->
      <ul class="visit_list">
        <li class="item" v-for="item in expoList" :key="item.id">
          <a class="logo_link" :href="item.web_site" target="_blank"></a>
          <div class="logo_box" v-bind:style="{backgroundImage: 'url(' + item.exhibitor_picture_url + ')'}"></div>
          <div class="fonts_box">
            <p class="title line2">{{language == "en" ? item.company_name_english : item.company_name_chinese}}</p>
            <p class="number">{{item.position_no}}</p>
            <p class="tips line2">{{language == "en" ? item.exhibitor_introduction_english : item.exhibitor_introduction_chinese}}</p>
          </div>          
        </li>
      </ul>
    </div>  
  </div>

</div>

</template>

<script>

import getModel from "../models/model";
let getExhibitorListModel = getModel("getExhibitorListModel");

export default {
  name: "Exhibitiors",
  data() {
    return {
      isPC: '',
      language: '',
      expoList: [],
      searchName: "",
      selected: '0',
      componyName: '',
      exhibitNumber: '',
      typeList: [
        { english: 'Pre-Press/Software/Design', chinese: '印前设备/系统/设计', value: '0' },
        { english: 'Digital Print Equipment & Accessory, Printing Substrates', chinese: '数码喷印设备/配件', value: '1' },
        { english: 'Digital Print Equipment & Accessory, Heat Transfer Production', chinese: '热升华/转印设备', value: '2' },
        { english: 'Ink Systems', chinese: '墨水', value: '3' },
        { english: 'Printing Substrates', chinese: '打印介质/板材', value: '4' },
        { english: 'Laser Cutting Machines / Engraving Machines / Accessory', chinese: '激光雕刻机/雕刻机/刻字机/弯字机等及配件', value: '5' },
        { english: 'Signage & Light Box', chinese: '户内外标识/标牌/灯箱/发光产品', value: '6' },
        { english: 'Display System', chinese: '展示器材', value: '7' },
        { english: 'Other Pop Product', chinese: '其他POP产品', value: '8' },
        { english: 'Books / Software / Gift', chinese: '设计书籍/软件/广告礼品', value: '9' },
        { english: 'Media / Association', chinese: '媒体/协会', value: '10' },
        { english: 'Others', chinese: '其他', value: '11' }       
      ]
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
    this.getExhibitorList();
  },
  methods: {
    getExhibitorList: function(){
      // 获取展会信息列表
      let params = {
        eid: '',
        cid: Number(this.selected),
        name: this.componyName +"",
        pno: this.exhibitNumber +"",
        page: '1',
        rownum: 99999
      }
      getExhibitorListModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.expoList = info.data.data;
          console.log("展会信息列表",info.data.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
