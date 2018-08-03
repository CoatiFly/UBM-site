<template>
<div class="out-side">
  <!-- 展示栏 -->
  <div :class="isPC ? 'show_list_box' : 'mobile_show_list_box'">
    <div class="show_number">
      <p class="title">{{$t("common.topTitle")}}</p>
      <ul class="number_list">
        <li class="item day">
          <p class="num"><v-countup delay="10" duration="4" :end-value="3"></v-countup></p>
          <p class="tips">{{$t("common.day")}}</p>
        </li>
        <li class="item att">
          <p class="num"><v-countup delay="10" duration="4" :end-value="45000"></v-countup></p>
          <p class="tips">{{$t("common.present")}}</p>
        </li>
        <li class="item exh">
          <p class="num"><v-countup delay="10" duration="4" :end-value="1200"></v-countup></p>
          <p class="tips">{{$t("common.exhibitor")}}</p>
        </li>
        <li class="item spe">
          <p class="num"><v-countup delay="10" duration="4" :end-value="53"></v-countup></p>
          <p class="tips">{{$t("common.guest")}}</p>
        </li>
        <li class="item ses">
          <p class="num"><v-countup delay="10" duration="4" :end-value="48"></v-countup></p>
          <p class="tips">{{$t("common.show")}}</p>
        </li>
        <li class="item are" v-if="language == 'en'">
          <p class="num"><v-countup delay="10" duration="4" :end-value="42000"></v-countup></p>
          <p class="tips">{{$t("common.number")}}</p>
        </li>
        <li class="item are" v-else>
          <p class="num"><v-countup delay="10" duration="4" :end-value="100000"></v-countup></p>
          <p class="tips">{{$t("common.number")}}</p>
        </li>
      </ul>
      <p class="title mar_other">{{$t("common.botTitle")}}</p>
    </div>
    <div class="with_logo_box" v-for="option in EnumList" :key="option.cate_id">
      <p class="title blue">{{language == "en" ? option.cate_ename : option.cate_cname}}</p>
      <ul class="logo_list" v-if="option.data">
        <li class="item" v-for="item in option.data" :key="item.id">
          <a :href="item.url" target="_blank" class="bg_box" v-bind:style="{backgroundImage: 'url(' + item.logo + ')'}">
          </a>
        </li>
      </ul>    
    </div>

  </div>
</div>
</template>

<script>
import getModel from "../models/model";
let getExhibitLinkerListModel = getModel("getExhibitLinkerListModel");

export default {
  name: "myCommon",
  data() {
    return {
      isPC: '',
      language: '',
      EnumList: {}
    };
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
    this.getEnumList();
  },
  methods: {
    getEnumList: function() {
      // 获取底部列表
      let params = {
        eid: '',
        cid: ''
      };
      getExhibitLinkerListModel.$post(params).then(info => {
        if (info.status == 1) {
          this.EnumList = info.data;
          console.log("底部链接", info.data);
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
