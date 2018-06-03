<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content travel">
      <div class="trave_left">
        <div class="text_box">
          <p class="title">{{$t("booth.title")}}</p>
          <p class="fonts mt30">{{$t("booth.second")}}</p>
        </div>
        <div class="center_box">
          <div class="bth_pdf">
            <div class="tips">{{$t("booth.tips")}}</div>
            <a href="static/booth_layout.pdf" class="block" target="_blank" v-if="isPC"></a>
            <a href="static/booth_layout.pdf" class="block" download="booth_layout.pdf" v-else></a>
          </div>
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
let getSlideByGroupModel = getModel("getSlideByGroupModel");

export default {
  name: "Plan",
  data() {
    return {
      language: '',
      isPC: '',  
      SliderList: []
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
          if(this.isPC){
            this.SliderList = info.data.slice(0,2);
          }else{
            this.SliderList = info.data;
          }
          console.log("广告列表",info.data);
        }
      });      
    }
  }
};
</script>

<style scoped lang="scss">

</style>
