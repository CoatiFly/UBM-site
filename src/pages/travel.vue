<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content travel">
      <div class="trave_left">
        <div class="text_box">
          <p class="title">{{$t("travel.title")}}</p>
          <p class="fonts">{{$t("travel.second")}}</p>
        </div>
        <div class="center_box">
          <div class="fonts_list_pc" v-if="isPC">
            <p class="fonts_left mt30">{{$t("travel.three")}}</p>
            <p class="fonts mt40">{{$t("travel.add_one")}}</p>
            <p class="fonts mt25">{{$t("travel.add_two")}}</p>
            <p class="fonts mt25">{{$t("travel.add_thr")}}</p>
            <p class="fonts mt25">{{$t("travel.add_four")}}</p>
            <p class="fonts line_26 mt50">{{$t("travel.add_five")}}</p>
            <p class="fonts line_26">{{$t("travel.add_six")}}</p>         
          </div>
          <div class="fonts_list_mobile" v-else>
            <p class="fonts">{{$t("travel.three")}}</p>
            <p class="fonts margin">{{$t("travel.add_one")}}</p>
            <p class="fonts mt30">{{$t("travel.add_two")}}</p>
            <p class="fonts mt30">{{$t("travel.add_thr")}}</p>
            <p class="fonts mt30">{{$t("travel.add_four")}}</p>
            <p class="fonts mt30">{{$t("travel.add_five")}}</p>
            <p class="fonts">{{$t("travel.add_six")}}</p>         
          </div>          
          <div class="map_box"></div>
          <div class="texts">{{$t("travel.text_one")}}</div>
          <div class="map_box"></div>
          <div class="texts">{{$t("travel.text_two")}}</div>
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


</div>
</template>

<script>

import getModel from "../models/model";
let getSlideByGroupModel = getModel("getSlideByGroupModel");;

export default {
  name: "Travel",
  data() {
    return {
      language: '',
      isPC: '', 
      SliderList: [1,2,3,4]
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
