<template>
<div class="out-side">
  <!-- 展示栏 -->
  <div class="show_list_box">
    <div class="show_number">
      <p class="title">THE SHOW COVERING THE SIGN & ADVERTISING SUPPLY CHAIN EXPECTING...</p>
      <ul class="number_list">
        <li class="item day">
          <p class="num">3</p>
          <p class="tips">DAYS</p>
        </li>
        <li class="item att">
          <p class="num">32650</p>
          <p class="tips">ATTENDEES</p>
        </li>
        <li class="item exh">
          <p class="num">1,200</p>
          <p class="tips">EXHIBITORS</p>
        </li>
        <li class="item spe">
          <p class="num">53</p>
          <p class="tips">SPEAKERS</p>
        </li>
        <li class="item ses">
          <p class="num">50</p>
          <p class="tips">SESSIONS</p>
        </li>
        <li class="item are">
          <p class="num">100,000</p>
          <p class="tips">EXHIBITION AREA</p>
        </li>
      </ul>
      <p class="title mt20">THE "OSCAR”EVENT IN THE SIGN AND ADVERTISING INDUSTRY.</p>
    </div>
    <div class="with_logo_box">
      <p class="title">IN ASSOCIATION WITH</p>
      <ul class="logo_list">
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
      </ul>    
    </div>
    <div class="with_logo_box">
      <p class="title">SUPPORTED BY</p>
      <ul class="logo_list">
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
      </ul>    
    </div>
    <div class="with_logo_box">
      <p class="title">CHARITY PARTNER</p>
      <ul class="logo_list">
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
      </ul>    
    </div> 
    <div class="with_logo_box">
      <p class="title">MEMBER OF</p>
      <ul class="logo_list">
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
      </ul>    
    </div>           
  </div>
</div>
</template>

<script>


export default {
  name: "myCommon",
  data() {
    return {
      QRcodeStatus: false,
      rssLayouStatus: false,
      sexCheckStatus: false
    };
  },
  mounted() {

  },
  methods: {
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

<style scoped>

</style>
