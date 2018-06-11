<template>
<div class="out-side">
  <!-- pc -->
  <div class="pc_banner_box" v-if="isPC">
    <div class="center" >
      <div class="video__container" style="background-image: url('static/video.png');">
        <video class="video" muted autoplay="autoplay" loop="loop" poster="static/video.png">
          <source src="static/public.mp4" type="video/mp4">
          <!-- <source src="static/public.webm" type="video/webm"> -->
        </video>
      </div>
    </div>
  </div>
  <!-- moblie -->
  <div class="mobile_banner_box" v-else>
    <div class="center">
      <div class="video__container" style="background-image: url('static/video.png');">
        <video class="video" muted autoplay="autoplay" loop="loop" poster="static/video.png">
          <source src="static/public.mp4" type="video/mp4">
          <!-- <source src="static/public.webm" type="video/webm"> -->
        </video>
      </div>
    </div>
  </div>      

</div>
</template>

<script>


export default {
  name: "banner",
  data() {
    return {
      isPC: ''
    };
  },
  mounted() {
    this.isPC = this.$store.state.isPC;
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
