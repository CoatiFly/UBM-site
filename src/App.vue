<template>
  <div id="app">
      <div class="content">
        <!-- 顶部导航组件 -->
        <myHeader></myHeader>
        <!-- banner -->
        <myBanner></myBanner>
        <!-- page -->
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
        
        <!-- 右侧悬浮组件 -->
        <div v-if="isPC">
          <mySuspension></mySuspension> 
        </div>
        <!-- 公共部分组件 -->
        <myCommon></myCommon>  
        <!-- 底部页脚组件 -->
        <myBottom></myBottom>        
     </div>
  </div>
</template>

<script>
import myHeader from "./components/header";
import myBanner from "./components/banner";
import myCommon from "./components/common";
import myBottom from "./components/bottom";
import mySuspension from "./components/suspension";

export default {
  name: "app",
  data() {
    return {
      isPC: ''
    };
  },
  components: {
    myHeader,
    myBanner,
    myBottom,
    myCommon,
    mySuspension
  },
  mounted() {
    this.isPC = this.$store.state.isPC;
    console.log("PC: ",this.isPC);
  },
};
</script>

<style>
.slide-fade{
  position: absolute;
  left:0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>