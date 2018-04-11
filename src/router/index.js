import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import WorkReact from '@/components/WorkReact'
import WorkVueJs from '@/components/WorkVueJs'
import WorkNodeJs from '@/components/WorkNodeJs'
import WorkJavascriptPython from '@/components/WorkJavascriptPython'
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
      component: WorkReact
    },
    {
      path: '/projects-react',
      name: 'React',
      component: WorkReact
    },
    {
      path: '/projects-vue-js',
      name: 'Vue.js',
      component: WorkVueJs
    },
    {
      path: '/projects-node-js',
      name: 'Node.js',
      component: WorkNodeJs
    },
    {
      path: '/projects-javascript-python',
      name: 'JavaScript/Python',
      component: WorkJavascriptPython
    },
    {
      path: '/projects',
      name: 'Work',
      component: Work
    },
    {
      path: '/Resume',
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
