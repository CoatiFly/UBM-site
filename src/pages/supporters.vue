<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content supporters">
      <div class="text_box">
        <p class="title">{{$t("supporters.title")}}</p>
      </div>
      <!-- supporters 列表 -->
      <ul class="supporters_list">
        <li class="item" v-for="item in supporters" :key="item.id">
          <a class="logo_link" :href="item.url" target="_blank"></a>
          <div class="logo_box" v-bind:style="{backgroundImage: 'url(' + item.logo + ')'}"></div>
          <div class="link line1">{{item.url}}</div>          
        </li>
      </ul>
    </div>  
  </div>


</div>
</template>

<script>

import getModel from "../models/model";
let getSystemLinkerListModel = getModel("getSystemLinkerListModel");

export default {
  name: "Supporters",
  data() {
    return {
      language: '',
      isPC: '',     
      supporters: {} 
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
    this.getSupporters();
    console.log(this.language,this.isPC);
  },
  methods: {
    getSupporters: function() {
      // 获取友情链接列表
      let params = {};
      getSystemLinkerListModel.$post(params).then(info => {
        if (info.status == 1) {
          this.supporters = info.data;
          console.log("友情链接", info.data);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
