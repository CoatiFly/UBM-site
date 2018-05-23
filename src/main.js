import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import en from './i18n/en'
import zh from './i18n/zh'
import store from './store/index.js'
import utils from './common/util.js';
// import ElementUI from 'element-ui'

import('./scss/main.scss');

if(utils.isPC()){
  store.commit("setIsPC",true);
}else{
  store.commit("setIsPC",false);
};

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en', 
  messages:{
    'en': en,
    'zh': zh
  }
});
store.commit("setLanguage",'en');

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App></App>',
  components: {
    App
  }
})


