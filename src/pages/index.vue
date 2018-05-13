<template>
<div class="page">
  <!-- 顶部导航栏 -->
  <div class="top_nav">
    <div class="nav_center">
      <ul class="nav_list">
        <li class="list">HOME</li>
        <li class="list second">
          <span class="pull_down">VISIT</span>
          <ul class="second_list">
            <li class="red_bg"></li>
            <li class="item">Why Visit</li>
            <li class="item">Register Interest</li>
            <li class="item">Exhibitiors</li>
            <li class="item">Products</li>
            <li class="item">Sessions</li>
            <li class="item">Speakers</li>
            <li class="item">Travel & accommodation</li>
          </ul>          
        </li>
        <li class="list second">
          <span class="pull_down">EXHIBIT</span>
          <ul class="second_list">
            <li class="red_bg"></li>
            <li class="item">Why Exhibit</li>
            <li class="item">Book a stand</li>
            <li class="item">Floor plan</li>
            <li class="item">Exhibitiors</li>
            <li class="item">Products</li>
            <li class="item">Become a sponsor</li>
          </ul>          
        </li>
        <li class="list second">
          <span class="pull_down">FSA</span>
          <ul class="second_list">
            <li class="red_bg"></li>
            <li class="item">Sessions</li>
            <li class="item">Speakers</li>
            <li class="item">Awards</li>
          </ul>
        </li>
        <li class="list">PRESS</li>
        <li class="list">SUPPORTERS</li>
        <li class="list">CONTACT US</li>
        <li class="list">GALLERY</li>
      </ul>
      <div class="right_nav">
        <div class="interesr">REGISTER INTEREST</div>
        <div class="stand">BOOK A STAND</div>  
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
        <div class="title">"OSCAR" EVENT OF GLOBAL SIGN & ADVERTISING INDUSTRY</div>
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
  <!-- banner -->
  <div class="banner_box">
    <div class="center">
      <img src="../assets/index_26.png" alt="">
    </div>
  </div>
  <!-- 内容 -->
  <div class="page_content">
    <div class="text_box">
      <p class="title">WELCOME TO THE SIGN CHINA</p>
      <p class="fonts"><span class="bold">SIGN CHINA</span> is a one-stop platform for the global sign community to source the latest model of inkjet printer, laser engraver, light box, traditional signage, digital signage, advertising display, <span class="bold">LED</span> illuminant, <span class="bold">LED</span> display, testing device and control system.</p>
      <p class="fonts mt20">International buyers and industry professionals gather here annually to look for Original Equipment Manufacturers (<span class="bold">OEM</span>) or solution providers for outdoor advertising, high-end conferencing or interactive digital signage.</p>
    </div>
    <div class="list_block">
      <ul class="shell">
        <li class="item">
          <img src="../assets/index_29.png" alt="">
        </li>
        <li class="item">
          <img src="../assets/index_31.png" alt="">
        </li>
        <li class="item">
          <img src="../assets/index_34.png" alt="">
        </li>
        <li class="item red_bg">
          <div class="open_time">
            <p class="title">OPENING TIMES</p>
            <ul class="time_box">
              <li class="time_list">Monday 30th March 2020: 10am – 5pm</li>
              <li class="time_list">Tuesday 31st March 2020: 10am – 5pm</li>
              <li class="time_list">Wednesday 1st April 2020: 10am – 4pm</li>
            </ul>
          </div>
        </li>
        <li class="item">
          <ul class="new_list">
            <li class="list">
              <div class="img">
                <img src="../assets/index_40.png" alt="">
              </div>
              <div class="text">
                <p class="title">WHAT’S NEW AT FOOD & DRINK EXPO 2018?</p>
                <p class="fonts">he latest from the UK’s gastronomic scene hits the NEC show floor Fe NEC show floor From 16-18 April, Food & Drink Expo will return to the NEC in Birmingham ...</p>
              </div>
            </li>
            <li class="list">
              <div class="img">
                <img src="../assets/index_43.png" alt="">
              </div>
              <div class="text">
                <p class="title">WHAT’S NEW AT FOOD & DRINK EXPO 2018?</p>
                <p class="fonts">he latest from the UK’s gastronomic scene hits the NEC show floor Fe NEC show floor From 16-18 April, Food & Drink Expo will return to the NEC in Birmingham ...</p>
              </div>
            </li>            
          </ul>
        </li>
        <li class="item red_bg">
          <div class="link_us">
            <p class="title">CONNECT WITH US</p>
            <ul class="link_list">
              <li class="wechat" v-on:click="SwitchLayou('QRcodeStatus')"></li>
              <li class="facebook">
                <a :href="facebookUrl" target="_blank"></a>
              </li>
            </ul>
          </div>         
        </li>
      </ul>
    </div>
  </div>    
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
  <!-- 底栏 -->
  <div class="page_bottom_box">
    <div class="bottom_center">
      <ul class="nav_list">
        <li class="item"><span>HOME</span></li>
        <li class="item long"><span>EXHIBIT</span></li>
        <li class="item"><span>VISIT</span></li>
        <li class="item red"><span>FSA</span></li>
        <li class="item long"><span>TRAVEL</span></li>
        <li class="item"><span>CONTACT US</span></li>
      </ul> 
      <ul class="bth_list">
        <li class="item">
          <span class="bth blue_bg">BOOK A STAND</span>
        </li>
        <li class="logo">
          <img src="../assets/index_46.png" alt="">
        </li>
        <li class="item">
          <span class="bth red_bg">REGISTER INTEREST</span>
        </li>        
      </ul>
      <ul class="link_list">
        <li class="item wechat" v-on:click="SwitchLayou('QRcodeStatus')"></li>
        <li class="item facebook">
          <a :href="facebookUrl" target="_blank"></a>
        </li>
        <li class="item rss" v-on:click="SwitchLayou('rssLayouStatus')"></li>
      </ul>
    </div>
    <div class="authentication"></div> 
    <div class="reference">隐私政策 | Copyright 2011 by UBM Trust Co Ltd (All Rights Reserved) 粤ICP备16120933号-2 粤公网安备 44010602002114号</div>    
  </div>
  <!-- link 悬浮层 -->
  <div class="layou_box">
    <ul class="list_box">
      <li class="item wechat" v-on:click="SwitchLayou('QRcodeStatus')"></li>
      <li class="item facebook">
        <a :href="facebookUrl" target="_blank"></a>
      </li>
    </ul>
  </div>
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
  <!-- RSS 弹层 -->
  <div class="layou_fixed" v-if="rssLayouStatus"> 
    <div class="layou_rss_box fixed_pos">
      <div class="close" v-on:click="SwitchLayou('rssLayouStatus')"></div>
      <div class="title">Subscribe the latest information</div>
      <ul class="list_box">
        <li class="item">
          <div class="name">Title<span class="red">*</span></div>
          <div class="pill_box">
            <input class="input_box" type="text" v-model="rssForm.sex" placeholder="Please enter your title">
            <div class="pull_icon" v-on:click="SwitchLayou('sexCheckStatus')"></div>
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
// import store from "../store";
// import tokyo from "../js/tool";
// import getModel from "../models/model";

// let monitorLoginModel = getModel("monitorLoginModel");
// let sendPhoneMsgModel = getModel("sendPhoneMsgModel");

export default {
  name: "Index",
  data() {
    return {
      QRcodeStatus: false,
      rssLayouStatus: false,
      sexCheckStatus: false,
      rssForm: {
        sex: 'Mr',
        last: '',
        given: '',
        email: ''
      },
      facebookUrl: 'http://new.facebook.com/',
      signChinaUrl: 'http://www.signchina-sh.com/en-us/',
      digitalUrl: 'http://www.digitalsignage-sh.com/en-us',
      ledChinaUrl: 'http://www.ledchina-sh.com/en-us/'

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

<style scoped lang="scss">

</style>
