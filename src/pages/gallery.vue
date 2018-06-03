<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content gallery">
      <div class="press_left">
        <div class="text_box">
          <p class="title">{{$t("gallery.title")}}</p>
        </div>
        <!-- press 列表 -->
        <ul class="press_list">
          <li class="item" v-for="(item,index) in SliderList" :key="item.id">
            <div class="news_wall" v-on:click="openSwiper(index)">
              <div class="logo_box">
                <div class="tips">2018 gallery</div>
                <img :src="item.picture">
                </div> 
            </div>
          </li>
        </ul>
      </div>
      <!-- 广告列表 -->
      <div class="press_right" v-if="isPC">
        <ul class="adver_list">
          <li class="item" v-for="item in SliderList" :key="item.id">
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
            <li class="item" v-for="item in SliderList" :key="item.id">
              <a class="blank_box" :href="item.linker" target="_blank">
                <div class="logo_box"><img :src="item.picture" alt="广告图片"></div>
                <p class="title line2">{{item.caption}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    <!-- 弹层组件 -->
    <div class="layou_fixed gallery_opacity" v-if="swiperState" @touchmove.prevent>
      <div class="gallery_box">
        <div class="close" v-on:click="SwitchLayou('swiperState')"></div>
        <swiper :options="swiperOption" ref="mySwiper" >
          <swiper-slide v-for="item in SliderList" :key="item.id">
            <img :src="item.picture" alt="">
          </swiper-slide>       
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>      
      </div>
    </div>   
  </div> 
</div>

</template>

<script>
import tokyo from "../common/util";
import getModel from "../models/model";
let getSlideByGroupModel = getModel("getSlideByGroupModel");

export default {
  name: "Gallery",
  data() {
    return {
      language: '',
      isPC: '',     
      SliderList: [],
      swiperState: false,
      index: 0,
      swiperOption: {
        notNextTick: true,
        paginationClickable: true,
        loop: false,
        initialSlide: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    };
  },
  components: {

  },
  computed: { 
  },
  mounted() {
    this.language = this.$store.state.language;
    this.isPC = this.$store.state.isPC;
    console.log(this.language,this.isPC);
    this.init();
  },
  methods: {
    init: function(){
      this.getSliderList();
    },
    openSwiper: function(index){
      // 查看大图
      this.swiperState = true;
      this.swiperOption.initialSlide = index;
    },
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
    },
    SwitchLayou: function(name){
      // 动态切换状态
      this[name] = !this[name];
    }
  }
};
</script>

<style scoped lang="scss">

</style>
