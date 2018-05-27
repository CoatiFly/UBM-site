<template>
<div class="out-side">
  <!-- pc -->
  <div class="pc_banner_box" v-if="isPC">
    <div class="center" >
      <img src="../assets/index_26.png" alt="">
    </div>
  </div>
  <!-- moblie -->
  <div class="mobile_banner_box" v-else>
    <div class="center">
      <img src="../assets/banner750.png" alt="">
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
