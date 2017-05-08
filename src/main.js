// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'reset-css'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import storePlugin from './storePlugin'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3,
  loading: '/static/images/loading.svg',
  adapter: {
    loaded ({ el }) {
      el.parentElement.classList.add('loaded')
    },
    loading ({ el }) {
      el.parentElement.classList.remove('loaded')
    },
    error ({ el }) {
      el.parentElement.classList.add('error')
    }
  }
})

Vue.use(Vuex)
Vue.use(storePlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
