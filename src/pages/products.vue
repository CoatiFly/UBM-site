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
        <p class="title">2018 PRODUCTS</p>
      </div>
      <!-- 搜索组件 -->
      <div class="search_box">
        <input class="search_ipt" type="text" v-model="searchName" placeholder="Product Name">
        <div class="serach_bth" v-on:click="getProductList">
          <p class="texts">Search</p>
        </div>
      </div>
      <!-- products 列表 -->
      <ul class="products_list">
        <li class="item" v-for="item in productList">
          <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
          <div class="fonts_box">
            <p class="title line1">{{language == "en" ? item.title_english : item.title_chinese}}</p>
            <p class="details line3">{{language == "en" ? item.remark_english : item.remark_chinese}} </p>
            <p class="number">{{item.position_no}}</p>
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
let getProductListModel = getModel("getProductListModel");

export default {
  name: "Products",
  data() {
    return {
      isPC: '',
      language: '',
      productList: [],
      searchName: "",
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
    this.getProductList();
  },
  methods: {
    getProductList: function(){
      // 获取展品列表
      let params = {
        name: this.searchName + "",
        page: '1',
        rownum: 10
      }
      getProductListModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.productList = info.data.data;
          console.log("展品列表",info.data.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
