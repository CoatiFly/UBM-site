<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <myBanner></myBanner>
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content products">
      <div class="text_box">
        <p class="title">2018 EXHIBITORS</p>
      </div>
      <!-- 搜索组件 -->
      <div class="search_box">
        <div class="duble_input">
          <input type="text" class="text_ipt fl" v-model="componyName" placeholder="Compony Name">
          <input type="text" class="text_ipt fr" v-model="exhibitNumber" placeholder="Exhibit Number">
        </div>
        <input class="search_ipt" type="text" v-model="searchName" placeholder="Pre-Press/Software/Design">
        <div class="serach_bth">
          <p class="texts">Search</p>
        </div>
      </div>
      <!-- visit 列表 -->
      <ul class="visit_list">
        <li class="item" v-for="item in expoList">
          <div class="logo_box"><img :src="item.exhibitor_picture_url" alt="图片"></div>
          <div class="fonts_box">
            <p class="title line2">{{language == "en" ? item.company_name_english : item.company_name_chinese}}</p>
            <p class="number">{{item.position_no}}</p>
            <p class="tips line2">{{language == "en" ? item.exhibitor_introduction_english : item.exhibitor_introduction_chinese}}</p>
          </div>          
        </li>
      </ul>
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
let getExhibitorListModel = getModel("getExhibitorListModel");

export default {
  name: "Exhibitiors",
  data() {
    return {
      isPC: '',
      language: '',
      expoList: [],
      searchName: "",
      componyName: '',
      exhibitNumber: ''
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
    this.getExhibitorList();
  },
  methods: {
    getExhibitorList: function(){
      // 获取展会信息列表
      let params = {
        eid: '',
        cid: '',
        name: this.componyName,
        pno: this.exhibitNumber,
        page: '1',
        rownum: 10
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
