<template>
  <div class="top_nav">
    <div class="nav_center">
      <ul class="nav_list">
        <li class="list">HOME</li>
        <li class="list">VISIT</li>
        <li class="list">EXHIBIT</li>
        <li class="list">FSA</li>
        <li class="list">PRESS</li>
        <li class="list">SUPPORTERS</li>
        <li class="list">CONTACT US</li>
        <li class="list">GALLERY</li>
      </ul>
      <div class="right_nav">
        <div class="interesr">REGISTER INTEREST</div>
        <div class="stand">BOOK A STAND</div>  
        <div class="language cur">EN</div>
        <div class="language">CN</div>
        <div class="logo_list" :class="{'open': logoListStatus }" v-on:click="SwitchLogoList">
          <i class="icon_arr"></i>
          <ul class="logo_box">
            <li class="list"><img src="../assets/logo1.png" alt=""></li>
            <li class="list"><img src="../assets/logo2.png" alt=""></li>
            <li class="list"><img src="../assets/logo3.png" alt=""></li>
          </ul>
        </div>
      </div>    
    </div>    
  
  </div>
</template>

<script>
// import store from "../store";
// import tokyo from "../js/tool";
// import getModel from "../models/model";

// let monitorLoginModel = getModel("monitorLoginModel");
// let sendPhoneMsgModel = getModel("sendPhoneMsgModel");

export default {
  name: "Index",
  data() {
    return {
      logoListStatus: false
    };
  },
  mounted() {
  },
  methods: {
    SwitchLogoList: function(){
      this.logoListStatus = !this.logoListStatus;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
