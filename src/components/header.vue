<template>
<div class="out-side" v-if="isPC">
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
                    <li class="item" v-on:click="goPage('register')">Register Interest</li>
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
                    <li class="item" v-on:click="goPage('awards')">Awards</li>
                </ul>
                </li>
                <li class="list" v-on:click="goPage('press')">PRESS</li>
                <li class="list" v-on:click="goPage('supporters')">SUPPORTERS</li>
                <li class="list" v-on:click="goPage('contact')">CONTACT US</li>
                <li class="list">GALLERY</li>
            </ul>
            <div class="right_nav">
                <div class="interesr" v-on:click="goPage('register')">{{$t("message.register")}}</div>
                <div class="stand" v-on:click="goPage('stand')">{{$t("message.stand")}}</div>  
                <div class="language" :class="{cur: language == 'en'}" v-on:click="switchLanguage('en')">{{$t("message.en")}}</div>
                <div class="language" :class="{cur: language == 'zh'}" v-on:click="switchLanguage('zh')">{{$t("message.zh")}}</div>
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
<div class="mobile_box" v-else>
    <!-- mobile 顶部导航栏 -->
    <div class="mobile_nav">
        <div class="nav_bth" v-on:click="switchNavPopup"></div>
        <div class="right_nav">
            <div class="stand" v-on:click="goPage('stand')">{{$t("message.stand")}}</div>  
            <div class="interesr" v-on:click="goPage('register')">{{$t("message.register")}}</div>
            <div class="language" :class="{cur: language == 'zh'}" v-on:click="switchLanguage('zh')">{{$t("message.zh")}}</div>
            <div class="language" :class="{cur: language == 'en'}" v-on:click="switchLanguage('en')">{{$t("message.en")}}</div>
        </div>           
    </div> 
    <!-- nav 弹层 -->
    <div class="nav_list_popup" v-if="navPopupState" @touchmove.prevent>
        <ul class="nav_list">
            <li class="list" v-on:click="goPage('index')">HOME</li>
            <li class="list second" :class="{cur: secondState == 'visit'}" v-on:click="openNavList('visit')"><span class="pull_down">VISIT</span></li>
            <li class="list_box" v-if="secondState == 'visit'">
                <ul class="second_list">
                    <li class="item" v-on:click="goPage('travel')">Why Visit</li>
                    <li class="item" v-on:click="goPage('register')">Register Interest</li>
                    <li class="item" v-on:click="goPage('exhibitiors')">Exhibitiors</li>
                    <li class="item" v-on:click="goPage('products')">Products</li>
                    <li class="item" v-on:click="goPage('sessions')">Sessions</li>
                    <li class="item" v-on:click="goPage('speakers')">Speakers</li>
                    <li class="item" v-on:click="goPage('travel')">Travel & accommodation</li>
                </ul>
            </li>
            <li class="list second" :class="{cur: secondState == 'exhibit'}" v-on:click="openNavList('exhibit')"><span class="pull_down">EXHIBIT</span></li>
            <li class="list_box" v-if="secondState == 'exhibit'">
                <ul class="second_list">
                    <li class="item" v-on:click="goPage('travel')">Why Exhibit</li>
                    <li class="item" v-on:click="goPage('stand')">Book a stand</li>
                    <li class="item">Floor plan</li>
                    <li class="item" v-on:click="goPage('exhibitiors')">Exhibitiors</li>
                    <li class="item" v-on:click="goPage('products')">Products</li>
                    <li class="item">Become a sponsor</li>
                </ul>  
            </li>
            <li class="list second" :class="{cur: secondState == 'fsa'}" v-on:click="openNavList('fsa')"><span class="pull_down">FSA</span></li>
            <li class="list_box" v-if="secondState == 'fsa'">
                <ul class="second_list">
                    <li class="item" v-on:click="goPage('sessions')">Sessions</li>
                    <li class="item" v-on:click="goPage('speakers')">Speakers</li>
                    <li class="item" v-on:click="goPage('awards')">Awards</li>
                </ul>                
            </li>
            <li class="list" v-on:click="goPage('press')">PRESS</li>
            <li class="list" v-on:click="goPage('supporters')">SUPPORTERS</li>
            <li class="list" v-on:click="goPage('contact')">CONTACT US</li>
            <li class="list">GALLERY</li>
        </ul> 
         <!-- more -->
         <div class="other_list">
             <div class="bth_list">
                <div class="stand bth" v-on:click="goPage('stand')">{{$t("message.stand")}}</div>  
                <div class="interesr bth" v-on:click="goPage('register')">{{$t("message.register")}}</div>
             </div>
             <div class="popup_list">
                <li class="item wechat" v-on:click="openWechatLayou"></li>
                <li class="item facebook">
                    <a :href="facebookUrl" target="_blank"></a>
                </li>
             </div>
         </div>
         <!-- close -->
         <div class="close" v-on:click="switchNavPopup"></div>
    </div>      
    <!-- logo+倒计时 -->
    <div class="count_logo_box">
        <div class="time_top">
            <div class="logo">
                <img src="../assets/index_03.png" alt="">
            </div>
            <div class="title">
                <p class="text">SNIEC SHANGHAI</p>
                <p class="text">19-21 SEP.</p>
            </div>
        </div> 
        <div class="time_number">
            <p class="time">152</p>
            <p class="day">DAYS</p>
        </div>       
        <div class="logo_bottom">
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
    <!-- wechat 弹层组件 -->
    <weChat ref="wechat"></weChat>        
</div>
</template>

<script>
import tokyo from "../common/util";
import weChat from "../components/wechat";
// import Vuex from 'vuex'

export default {
  name: "myHeader",
  data() {
    return {
      signChinaUrl: "http://www.signchina-sh.com/en-us/",
      digitalUrl: "http://www.digitalsignage-sh.com/en-us",
      ledChinaUrl: "http://www.ledchina-sh.com/en-us/",
      facebookUrl: 'http://new.facebook.com/',
      navPopupState: false,
      secondState: '',
      language: 'en',
      isPC: ''
    };
  },
    components: {
    weChat
  },
  mounted() {
    this.language = this.$store.state.language;
    this.isPC = this.$store.state.isPC;
  },
  methods: {
    goPage: function(name) {
      // 跳转页面
      tokyo.go(name);
    },
    switchLanguage: function(name){
        // 切换语言
        this.$store.commit("setLanguage",name);
        this.$i18n.locale = name;
        this.language = name;
    },
    openNavList: function(name){
        // mobile 打开二级菜单
        if(this.secondState == name){
            this.secondState = '';
        }else{
            this.secondState = name;
        }
    },
    openWechatLayou: function(){
      // 打开微信二维码弹层
      this.$refs.wechat.show();
    },
    switchNavPopup: function(){
        // 导航切换
        this.navPopupState = !this.navPopupState;
    }
  }
};
</script>

<style scoped>

</style>
