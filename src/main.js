import Vue from 'vue'
import App from './App.vue'

import store from './store'
import './myMixins'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
