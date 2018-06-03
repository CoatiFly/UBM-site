<template>
<div class="page">
  <!-- page center -->
  <div :class="isPC ? 'pc_box' : 'mobile_box'">
    <!-- 内容 -->
    <div class="page_content contact">
      <div class="text_box">
        <p class="title">{{$t("contact.title")}}</p>
        <p class="fonts">{{$t("contact.second")}}</p>
      </div>
      <div class="center_box">
        <div class="fonts_list_pc">
          <p class="fonts_left mt30">{{$t("contact.three")}}</p>
          <p class="fonts mt40">{{$t("contact.add_one")}}</p>
          <p class="fonts mt25">{{$t("contact.add_two")}}</p>
          <p class="fonts mt25">{{$t("contact.add_thr")}}</p>
          <p class="fonts mt25">{{$t("contact.add_four")}}</p>
          <p class="fonts line_26 mt50">{{$t("contact.add_five")}}</p>
          <p class="fonts line_26">{{$t("contact.add_six")}}</p>          
        </div>
        <div class="fonts_list_mobile">
          <p class="fonts">{{$t("contact.three")}}</p>
          <p class="fonts margin">{{$t("contact.add_one")}}</p>
          <p class="fonts">{{$t("contact.add_two")}}</p>
          <p class="fonts">{{$t("contact.add_thr")}}</p>
          <p class="fonts">{{$t("contact.add_four")}}</p>
          <p class="fonts">{{$t("contact.add_five")}}</p>
          <p class="fonts">{{$t("contact.add_six")}}</p>          
        </div>
        <div class="map_box"></div>
        <div class="texts">{{$t("contact.text_one")}}</div>
        <div class="map_box"></div>
        <div class="texts">{{$t("contact.text_two")}}</div>
      </div>
    </div> 
  </div>    
 

</div>
</template>

<script>

export default {
  name: "Contact",
  data() {
    return {
      isPC: '',
      language: '',
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
  },
  methods: {
    openWechatLayou: function(){
      // 显示微信二维码弹层
      this.$refs.wechat.show();
    },
    SwitchLayou: function(name){
      // 动态切换状态
      this[name] = !this[name];
    },
    selectSexName: function(name){
      // 选择性别
      this.rssForm.sex = name;
      this.sexCheckStatus = false;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
