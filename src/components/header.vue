<template>
<div class="out-side">
    <!-- 顶部导航栏 -->
    <div class="top_nav">
        <div class="nav_center">
        <ul class="nav_list">
            <li class="list" v-on:click="goPage('index')">HOME</li>
            <li class="list second">
            <span class="pull_down">VISIT</span>
            <ul class="second_list">
                <li class="red_bg"></li>
                <li class="item" v-on:click="goPage('travel')">Why Visit</li>
                <li class="item">Register Interest</li>
                <li class="item" v-on:click="goPage('exhibitiors')">Exhibitiors</li>
                <li class="item" v-on:click="goPage('products')">Products</li>
                <li class="item" v-on:click="goPage('sessions')">Sessions</li>
                <li class="item" v-on:click="goPage('speakers')">Speakers</li>
                <li class="item" v-on:click="goPage('travel')">Travel & accommodation</li>
            </ul>          
            </li>
            <li class="list second">
            <span class="pull_down">EXHIBIT</span>
            <ul class="second_list">
                <li class="red_bg"></li>
                <li class="item" v-on:click="goPage('travel')">Why Exhibit</li>
                <li class="item" v-on:click="goPage('stand')">Book a stand</li>
                <li class="item">Floor plan</li>
                <li class="item" v-on:click="goPage('exhibitiors')">Exhibitiors</li>
                <li class="item" v-on:click="goPage('products')">Products</li>
                <li class="item">Become a sponsor</li>
            </ul>          
            </li>
            <li class="list second">
            <span class="pull_down">FSA</span>
            <ul class="second_list">
                <li class="red_bg"></li>
                <li class="item" v-on:click="goPage('sessions')">Sessions</li>
                <li class="item" v-on:click="goPage('speakers')">Speakers</li>
                <li class="item">Awards</li>
            </ul>
            </li>
            <li class="list" v-on:click="goPage('press')">PRESS</li>
            <li class="list" v-on:click="goPage('supporters')">SUPPORTERS</li>
            <li class="list" v-on:click="goPage('contact')">CONTACT US</li>
            <li class="list">GALLERY</li>
        </ul>
        <div class="right_nav">
            <div class="interesr">REGISTER INTEREST</div>
            <div class="stand" v-on:click="goPage('stand')">BOOK A STAND</div>  
            <div class="language cur">EN</div>
            <div class="language">CN</div>
            <div class="logo_list">
            <ul class="logo_box">
                <li class="list"><img src="../assets/index_07.png" alt=""></li>
                <li class="list"><img src="../assets/index_09.png" alt=""></li>
                <li class="list"><img src="../assets/index_08.png" alt=""></li>
            </ul>
            </div>
        </div>    
        </div>    
    </div>
    <!-- logo+倒计时 -->
    <div class="count_logo_box">
        <div class="center_box">
        <div class="time_left">
            <div class="logo">
            <img src="../assets/index_03.png" alt="">
            </div>
            <div class="title">
            <p class="text">SNIEC SHANGHAI</p>
            <p class="text">19-21 SEP.</p>
            </div>
            <div class="time_count">
            <p class="time">152</p>
            <p class="day">DAYS</p>
            </div>
        </div>
        <div class="logo_right">
            <div class="title">"OSCAR" EVENT OF GLOBAL ADVERTISING & SIGN INDUSTRY</div>
            <ul class="logo_list">
            <li class="item left">
                <a :href="signChinaUrl" target="_blank">
                <img src="../assets/index_10.png" alt="">
                </a>
            </li>
            <li class="item center">
                <a :href="ledChinaUrl" target="_blank">
                <img src="../assets/index_13.png" alt="">
                </a>
            </li>
            <li class="item right">
                <a :href="digitalUrl" target="_blank">
                <img src="../assets/index_16.png" alt="">
                </a>            
                </li>
            </ul>
        </div>
        </div>
    </div>    
</div>
</template>

<script>
import tokyo from "../common/util";

export default {
  name: "myHeader",
  data() {
    return {
      signChinaUrl: "http://www.signchina-sh.com/en-us/",
      digitalUrl: "http://www.digitalsignage-sh.com/en-us",
      ledChinaUrl: "http://www.ledchina-sh.com/en-us/"
    };
  },
  mounted() {},
  methods: {
    goPage: function(name) {
      // 跳转页面
      tokyo.go(name);
    }
  }
};
</script>

<style scoped>

</style>
