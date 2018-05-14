<template>
<div class="out-side">
  <!-- wechat 弹层 -->
  <div class="layou_fixed" v-if="QRcodeStatus">
    <div class="wechat_qrcode fixed_pos">
      <div class="close" v-on:click="SwitchLayou('QRcodeStatus')"></div>
      <div class="qrcode">
        <img src="../assets/qrcode.png" alt="">
      </div>
      <div class="tips">FOLLOW US</div>
    </div>
  </div>   
</div>
</template>

<script>


export default {
  name: "wechat",
  data() {
    return {
      QRcodeStatus: false
    };
  },
  mounted() {

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
