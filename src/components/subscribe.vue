<template>
<div class="out-side">
  <!-- RSS 弹层 -->
  <div class="layou_fixed" v-if="rssLayouStatus" @touchmove.prevent> 
    <div class="fixed_pos" :class="isPC ? 'layou_rss_box' : 'mobile_layou_rss_box'">
      <div class="close" v-on:click="SwitchLayou('rssLayouStatus')"></div>
      <div class="title">Subscribe the latest information</div>
      <ul class="list_box">
        <li class="item">
          <div class="name">Title<span class="red">*</span></div>
          <div class="pill_box">
            <p class="input_box pull_icon" v-on:click="SwitchLayou('sexCheckStatus')">{{rssForm.sex}}</p>
            <div class="pull_down" v-if="sexCheckStatus" v-on:mouseleave="SwitchLayou('sexCheckStatus')">
              <ul class="box">
                <li class="sex" v-on:click="selectSexName('Mr')">Mr</li>
                <li class="sex" v-on:click="selectSexName('Mrs')">Mrs</li>
              </ul>
            </div>            
          </div>           
        </li>
        <li class="item">
          <div class="name">Last Name<span class="red">*</span></div>
          <input class="input_box" type="text" v-model="rssForm.last" placeholder="Please enter your last name">         
        </li>
        <li class="item">
          <div class="name">Given Name<span class="red">*</span></div>
          <input class="input_box" type="text" v-model="rssForm.given" placeholder="Please enter your given name">
        </li>
        <li class="item">
          <div class="name">Email<span class="red">*</span></div>
          <input class="input_box" type="text" v-model="rssForm.email" placeholder="Please enter your email">
        </li>
        <li class="item">
          <div class="Submit">Submit</div>
        </li>
      </ul>
    </div>
  </div>    
</div>
</template>

<script>


export default {
  name: "subscribe",
  data() {
    return {
      isPC: '',
      rssLayouStatus: false,
      sexCheckStatus: false,
      rssForm: {
        sex: 'Mr',
        last: '',
        given: '',
        email: ''
      }
    };
  },
  mounted() {
    this.isPC = this.$store.state.isPC;
  },
  methods: {
    show: function(){
      this.rssLayouStatus = true;
    },
    hide: function(){
      this.rssLayouStatus = false;
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

<style scoped>

</style>
