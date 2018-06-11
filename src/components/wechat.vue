<template>
<div class="out-side">
  <!-- wechat 弹层 -->
  <div class="layou_fixed" v-if="QRcodeStatus" @touchmove.prevent>
    <div class="fixed_pos" :class="isPC ? 'wechat_qrcode' : 'mobile_wechat_qrcode'">
      <div class="close" v-on:click="SwitchLayou('QRcodeStatus')"></div>
      <div class="qrcode">
        <img src="../assets/qrcode.png" alt="">
      </div>
      <div class="tips">{{$t("wechat.text")}}</div>
      <div class="tips">{{$t("wechat.wechatTips")}}</div>
    </div>
  </div>   
</div>
</template>

<script>


export default {
  name: "wechat",
  data() {
    return {
      QRcodeStatus: false,
      isPC: ''
    };
  },
  mounted() {
    this.isPC = this.$store.state.isPC;
  },
  methods: {
    show: function(){
      this.QRcodeStatus = true;
    },
    hide: function(){
      this.QRcodeStatus = false;
    },
    SwitchLayou: function(name){
      // 动态切换状态
      this[name] = !this[name];
    }
  }
};
</script>

<style scoped>

</style>
