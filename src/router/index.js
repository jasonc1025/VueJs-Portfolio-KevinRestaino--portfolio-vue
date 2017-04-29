import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import Project from '@/components/Project.vue'
import Experience from '@/components/Experience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Work',
      component: Work
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/work/:category/:project',
      component: Project
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
