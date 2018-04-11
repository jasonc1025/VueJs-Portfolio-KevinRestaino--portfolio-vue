import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import Project from '@/components/Project.vue'
import Experience from '@/components/Experience'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'React',
      component: Work
    },
    {
      path: '/',
      name: 'Vue.js',
      component: Work
    },
    {
      path: '/',
      name: 'Node.js',
      component: Work
    },
    {
      path: '/',
      name: 'Python',
      component: Work
    },
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
      path: '/work/:category/:slug',
      component: Project
    },
    {
      path: '*',
      component: Error
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
