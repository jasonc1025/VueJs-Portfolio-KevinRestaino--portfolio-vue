import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import Project from '@/components/Project.vue'
import Resume from '@/components/Resume'

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
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/work/:category/:project',
      component: Project
    }
  ]
})
