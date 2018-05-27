<template>
<div class="page">
  <!-- 顶部导航组件 -->
  <myHeader></myHeader>
  <!-- banner -->
  <myBanner></myBanner>
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content travel">
      <div class="trave_left">
        <div class="text_box">
          <p class="title">AWARDS</p>
          <p class="fonts">THE VENUE</p>
        </div>
        <div class="center_box">
          <div class="fonts_list_pc" v-if="isPC">
            <p class="fonts_left mt30">Food & Drink Expo 2020 takes place at the National Exhibition Centre (NEC), Birmingham, UK in Hall 2. The NEC is the UK's premier exhibition centre and is conveniently located with easy access from the whole of UK, Europe and the rest of the world.</p>
            <p class="fonts mt40">National Exhibition Centre (NEC)</p>
            <p class="fonts mt25">Birmingham</p>
            <p class="fonts mt25">West Midlands</p>
            <p class="fonts mt25">B40 1NT</p>
            <p class="fonts line_26 mt50">Tel: +44 (0) 121 780 4141</p>
            <p class="fonts line_26">Email: info@necgroup.co.uk</p>          
          </div>
          <div class="fonts_list_mobile" v-else>
            <p class="fonts">Food & Drink Expo 2020 takes place at the National Exhibi-  </p>
            <p class="fonts">tion Centre (NEC), Birming,</p>
            <p class="fonts">heniently located with easy access from the whole of UK,</p>
            <p class="fonts">Europe and the rest of the world.</p>
            <p class="fonts margin">National Exhibition Centre (NEC)</p>
            <p class="fonts mt30">Birmingham</p>
            <p class="fonts mt30">West Midlands</p>
            <p class="fonts mt30">B40 1NT</p>
            <p class="fonts mt30">Tel: +44 (0) 121 780 4141</p>
            <p class="fonts">Email: info@necgroup.co.uk</p>          
          </div>          
          <div class="map_box"></div>
          <div class="texts">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future. </div>
          <div class="map_box"></div>
          <div class="texts">Providing the number one route to the UK food and drink market. Join the UK’s most progressive food and drink professionals on 30th March- 1st April 2020 for five shows covering the complete supply chain. Food & Drink Expo will run alongside Foodex, The Ingredients Show, National Convenience Show and Farm Shop & Deli Show. The UK Food Shows attract buyers and decision makers from across the whole industry, who will converge to uncover the hottest trends, latest product launches and the industry’s vision for the future. </div>
        </div>    
      </div> 
      <!-- 广告列表 -->
      <div class="press_right" v-if="isPC">
        <ul class="adver_list">
          <li class="item" v-for="item in SliderList">
            <a class="blank_box" :href="item.linker" target="_blank">
              <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
              <p class="title line2">{{item.caption}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 广告列表 -->
      <div class="press_right" v-else>
        <div class="over_x">
          <ul class="adver_list" :style="{width: SliderList.length * 2.24 + 0.2 + 'rem'}">
            <li class="item" v-for="item in SliderList">
              <a class="blank_box" :href="item.linker" target="_blank">
                <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
                <p class="title line2">{{item.caption}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>       
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
let getSlideByGroupModel = getModel("getSlideByGroupModel");;

export default {
  name: "Awards",
  data() {
    return {
      language: '',
      isPC: '', 
      SliderList: [1,2,3,4]
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
    this.getSliderList();
  },
  methods: {
    getSliderList: function(){
      // 获取广告列表
      let params = {
        gid: 1,
      }
      getSlideByGroupModel.$post(params).then((info) => {
        if (info.status == 1) {
          this.SliderList = info.data;
          console.log("广告列表",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
