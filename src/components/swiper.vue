<template>
<div class="out-side">
  <div class="layou_fixed" v-if="swiperState" @touchmove.prevent>
    <div class="close" v-on:click="SwitchLayou('swiperState')"></div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-if="item in listData">
              <img :src="item.picture" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'vue-awesome-swiper';

export default {
  name: "swiper",
  props: { 
  },
  data() {
    return {
      swiperState: false,
      listData: ["http://139.224.135.176/wwwroot/ubm/public/uploads/58e99cca989be.jpg","http://139.224.135.176/wwwroot/ubm/public/uploads/58e99cca989be.jpg","http://139.224.135.176/wwwroot/ubm/public/uploads/58e99cca989be.jpg"],
      index: 0
    };
  },
  mounted() {

  },
  methods: {
    show: function(data,index){
      this.initSwiper();
      this.swiperState = true;
    },
    hide: function(){
      this.swiperState = false;
    },
    SwitchLayou: function(name){
      // 动态切换状态
      this[name] = !this[name];
    },
    initSwiper: function(){
      new Swiper ('.swiper-container', {
        loop: true,
        initialSlide: this.index,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });      
    }
  }
};
</script>

<style scoped>

</style>
