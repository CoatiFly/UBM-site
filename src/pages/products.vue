<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content products">
      <div class="text_box">
        <p class="title">{{$t("product.title")}}</p>
      </div>
      <!-- 搜索组件 -->
      <div class="search_box">
        <input class="search_ipt" type="text" v-model="searchName" :placeholder="$t('product.placeholder')">
        <div class="serach_bth" v-on:click="getProductList">
          <p class="texts">{{$t("product.button")}}</p>
        </div>
      </div>
      <!-- products 列表 -->
      <ul class="products_list">
        <li class="item" v-for="item in productList" :key="item.id">
          <a class="logo_link" :href="item.web_site" target="_blank"></a>
          <div class="logo_box" v-bind:style="{backgroundImage: 'url(' + item.picture + ')'}"></div>
          <div class="fonts_box">
            <p class="title line1">{{language == "en" ? item.title_english : item.title_chinese}}</p>
            <p class="details line2">{{language == "en" ? item.company_name_english : item.company_name_chinese}} </p>
            <p class="number">{{item.position_no}}</p>
          </div>          
        </li>
      </ul>
    </div>  
  </div>

</div>

</template>

<script>

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
        rownum: 99999
      }
      getProductListModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.productList = info.data;
          console.log("展品列表",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
