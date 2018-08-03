<template>
<div class="out-side">
  <!-- link 悬浮层 -->
  <div class="layou_box">
    <ul class="list_box">
      <li class="item wechat" v-on:click="openWechatLayou"></li>
      <li class="item facebook">
        <a :href="facebookUrl" target="_blank"></a>
      </li>
    </ul>
  </div>  
  <!-- wechat 弹层组件 -->
  <weChat ref="wechat"></weChat> 
</div>
</template>

<script>
import weChat from "../components/wechat";

export default {
  name: "suspension",
  data() {
    return {
      facebookUrl: 'https://www.facebook.com/ubmTrust/'
    };
  },
  components: {
    weChat
  },
  mounted() {

  },
  methods: {
    openWechatLayou: function(){
      this.$refs.wechat.show();
    }
  }
};
</script>

<style scoped>

</style>
