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
import VueCarousel from 'vue-carousel'

// import {alert} from 'vue-strap/src/alert'
// import alert from 'vue-strap/src/alert'
// import VueStrap from 'vue-strap'

// import {vueAccordion} from 'vue-accordion'

// import {accordion} from '@profesia/vue-accordion-component'

// import VueAccordionMenu from 'vue-accordion-menu'
// import { AccordionMenu } from 'vue-accordion-menu/src'
import { AccordionMenu } from 'vue-accordion-menu'

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

Vue.use(VueCarousel)
// Vue.use(VueStrap)
// Vue.component('alert', alert)

// Vue.component('vue-accordion', vueAccordion)

// Vue.component('accordion', accordion)

// Vue.use(VueAccordionMenu)
Vue.component('AccordionMenu', AccordionMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
    // vueAccordion
    // alert: alert
  }
})
