<template>
<div class="out-side">
  <!-- 展示栏 -->
  <div :class="isPC ? 'show_list_box' : 'mobile_show_list_box'">
    <div class="show_number">
      <p class="title">THE SHOW COVERING THE SIGN & ADVERTISING SUPPLY CHAIN EXPECTING...</p>
      <ul class="number_list">
        <li class="item day">
          <p class="num"><v-countup :end-value="3"></v-countup></p>
          <p class="tips">DAYS</p>
        </li>
        <li class="item att">
          <p class="num"><v-countup :end-value="32650"></v-countup></p>
          <p class="tips">ATTENDEES</p>
        </li>
        <li class="item exh">
          <p class="num"><v-countup :end-value="1200"></v-countup></p>
          <p class="tips">EXHIBITORS</p>
        </li>
        <li class="item spe">
          <p class="num"><v-countup :end-value="53"></v-countup></p>
          <p class="tips">SPEAKERS</p>
        </li>
        <li class="item ses">
          <p class="num"><v-countup :end-value="60"></v-countup></p>
          <p class="tips">SESSIONS</p>
        </li>
        <li class="item are">
          <p class="num"><v-countup :end-value="42000"></v-countup></p>
          <p class="tips">EXHIBITION AREA</p>
        </li>
      </ul>
      <p class="title mar_other">...THE "OSCAR”EVENT IN THE SIGN AND ADVERTISING INDUSTRY.</p>
    </div>
    <div class="with_logo_box" v-for="option in EnumList" :key="option.cate_id">
      <p class="title">{{language == "en" ? option.cate_ename : option.cate_cname}}</p>
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
