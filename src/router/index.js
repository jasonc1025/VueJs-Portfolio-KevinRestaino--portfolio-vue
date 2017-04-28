import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
