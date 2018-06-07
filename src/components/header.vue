<template>
<div class="out-side" v-if="isPC">
    <!-- 顶部导航栏 -->
    <div class="top_nav">
        <div class="nav_center">
            <ul class="nav_list">
                <li class="list" v-for="item in navList" :key="item.id" :class="{second: !!item._child}">
                    <div class="bth" v-if="item._child">
                        <span class="pull_down">{{language == "en" ? item.title_english : item.title}}</span>
                        <ul class="second_list">
                            <li class="red_bg"></li>
                            <li class="item" v-for="option in item._child" :key="option.id">
                                <p class="click" v-if="option.link_type ==1" v-on:click="goPage(option.page)">{{language == "en" ? option.title_english.replace("amp;",'') : option.title}}</p>
                                <a :href="option.page" class="pdf_block" target="_blank" v-else>{{language == "en" ? option.title_english.replace("amp;",'') : option.title}}</a>
                            </li>
                        </ul>  
                    </div>
                    <div class="bth" v-else v-on:click="goPage(item.page)">{{language == "en" ? item.title_english : item.title}}</div>
                </li>
            </ul>
            <div class="right_nav">
                <div class="interesr" v-on:click="goPage('register')">{{$t("header.register")}}</div>
                <div class="stand" v-on:click="goPage('stand')">{{$t("header.stand")}}</div>  
                <div class="language" :class="{cur: language == 'en'}" v-on:click="switchLanguage('en')">{{$t("header.en")}}</div>
                <div class="language" :class="{cur: language == 'zh'}" v-on:click="switchLanguage('zh')">{{$t("header.zh")}}</div>
                <div class="logo_list">
                    <ul class="logo_box">
                        <li class="list">
                            <a :href="signChinaUrl" target="_blank"><img src="../assets/index_07.png" alt=""></a>
                        </li>
                        <li class="list">
                            <a :href="ledChinaUrl" target="_blank"><img src="../assets/index_09.png" alt=""></a>
                        </li>
                        <li class="list">
                            <a :href="digitalUrl" target="_blank"><img src="../assets/index_08.png" alt=""></a>
                        </li>
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
                    <p class="text">{{language == "en" ? ExhibitionData.short_title_en : ExhibitionData.short_title_cn}}</p>
                    <p class="text">{{language == "en" ? ExhibitionData.short_date_en : ExhibitionData.short_date_cn}}</p>
                </div>
                <div class="time_count">
                    <p class="time">{{ExhibitionData.count}}</p>
                    <p class="day">{{$t("header.day")}}</p>
                </div>
            </div>
            <div class="logo_right">
                <div class="title">{{$t("header.title")}}</div>
                <ul class="logo_list">
                <li class="item">
                    <a :href="signChinaUrl" target="_blank">
                    <img src="../assets/index_10.png" alt="">
                    </a>
                </li>
                <li class="item">
                    <a :href="ledChinaUrl" target="_blank">
                    <img src="../assets/index_13.png" alt="">
                    </a>
                </li>
                <li class="item">
                    <a :href="digitalUrl" target="_blank">
                    <img src="../assets/index_14.png" alt="">
                    </a>            
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</div>
<div class="mobile_nav_box" v-else>
    <!-- mobile 顶部导航栏 -->
    <div class="mobile_nav">
        <div class="nav_bth" v-on:click="switchNavPopup"></div>
        <div class="right_nav">
            <div class="stand" v-on:click="goPage('stand')">{{$t("header.stand")}}</div>  
            <div class="interesr" v-on:click="goPage('register')">{{$t("header.register")}}</div>
            <div class="language" :class="{cur: language == 'zh'}" v-on:click="switchLanguage('zh')">{{$t("header.zh")}}</div>
            <div class="language" :class="{cur: language == 'en'}" v-on:click="switchLanguage('en')">{{$t("header.en")}}</div>
        </div>           
    </div> 
    <!-- nav 弹层 -->
    <div class="nav_list_popup" v-if="navPopupState" @touchmove.prevent>
        <ul class="nav_list">
            <li class="list" v-for="item in navList" :key="item.id" :class="{second: !!item._child}">
                <div class="bth" :class="{cur: secondState == item.page}" v-if="item._child">
                    <div class="mobile_bth" v-on:click="openNavList(item.page)">
                        <span class="pull_down">{{language == "en" ? item.title_english : item.title}}</span>
                    </div>
                    <ul class="second_list" v-if="secondState == item.page">
                        <li class="item" v-for="option in item._child" :key="option.id" v-on:click="goPage(option.page)">{{language == "en" ? option.title_english.replace("amp;",'') : option.title}}</li>
                    </ul>  
                </div>
                <div class="bth" v-else v-on:click="goPage(item.page)">{{language == "en" ? item.title_english : item.title}}</div>
            </li>
        </ul>
         <!-- more -->
         <div class="other_list">
             <div class="bth_list">
                <div class="stand bth" v-on:click="goPage('stand')">{{$t("header.stand")}}</div>  
                <div class="interesr bth" v-on:click="goPage('register')">{{$t("header.register")}}</div>
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
                <p class="text">{{$t("header.site")}}</p>
                <p class="text">{{$t("header.date")}}</p>
            </div>
        </div> 
        <div class="time_number">
            <p class="time">{{ExhibitionData.count}}</p>
            <p class="day">{{$t("header.day")}}</p>
        </div>       
        <div class="logo_bottom">
            <div class="title">{{$t("header.title")}}</div>
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
                    <img src="../assets/index_14.png" alt="">
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
import getModel from "../models/model";
let getNavTreeModel = getModel("getNavTreeModel");
let getExhibitionByIdModel = getModel("getExhibitionByIdModel");

export default {
  name: "myHeader",
  data() {
    return {
      signChinaUrl: "http://www.signchina-sh.com/en-us/",
      digitalUrl: "http://www.digitalsignage-sh.com/en-us",
      ledChinaUrl: "http://www.ledchina-sh.com/en-us/",
      facebookUrl: "http://new.facebook.com/",
      navList: [],
      ExhibitionData: {},
      navPopupState: false,
      secondState: "",
      language: "en",
      isPC: ""
    };
  },
  components: {
    weChat
  },
  mounted() {
    this.language = this.$store.state.language;
    this.isPC = this.$store.state.isPC;
    this.init();
  },
  methods: {
    init: function() {
      this.getNavList();
      this.getExhibition();
    },
    goPage: function(name) {
      // 跳转页面
      this.navPopupState = false;
      tokyo.go(name);
    },
    switchLanguage: function(name) {
      // 切换语言
      this.$store.commit("setLanguage", name);
      this.$i18n.locale = name;
      this.language = name;
      console.log("language: ",name);
    },
    openNavList: function(name) {
      console.log(name);
      // mobile 打开二级菜单
      if (this.secondState == name) {
        this.secondState = "";
      } else {
        this.secondState = name;
      }
    },
    openWechatLayou: function() {
      // 打开微信二维码弹层
      this.$refs.wechat.show();
    },
    switchNavPopup: function() {
      // 导航切换
      this.navPopupState = !this.navPopupState;
    },
    getNavList: function() {
      // 获取导航树
      let params = {};
      getNavTreeModel.$post(params).then(info => {
        if (info.status == 1) {
          this.navList = info.data;
          console.log("导航树", info.data);
        }
      });
    },
    getExhibition: function() {
      // 获取展会信息
      let params = {};
      getExhibitionByIdModel.$post(params).then(info => {
        if (info.status == 1) {
            let data = info.data;
            data.count = this.getCurrentDay(data.start_time);
            this.ExhibitionData = data;
            console.log("展会信息", info.data);
        }
      });
    },
    getCurrentDay: function(end) {
      // 获取当前距展会开始的天数
      let cur = tokyo.FormatDateLack(new Date());
      let num = tokyo.NuberBetween(cur, end);
      return num;
    }
  }
};
</script>

<style scoped>
</style>
