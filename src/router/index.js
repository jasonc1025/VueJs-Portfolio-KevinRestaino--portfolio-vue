import Vue from 'vue'
import Router from 'vue-router'
import Work from '@/components/Work'
import WorkReact from '@/components/WorkReact'
import WorkVueJs from '@/components/WorkVueJs'
import WorkNodeJs from '@/components/WorkNodeJs'
import WorkRobotics from '@/components/WorkRobotics'
import WorkIndustrySiemens from '@/components/WorkIndustrySiemens'
import Project from '@/components/Project.vue'
import Home from '@/components/Home'
import Vision from '@/components/Vision'
import Resume from '@/components/Resume'
import ResumeShort from '@/components/ResumeShort'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/vision',
      name: 'Vision',
      component: Vision
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
      path: '/projects-robotics',
      name: 'Robotics',
      component: WorkRobotics
    },
    {
      path: '/projects-industry-siemens',
      name: 'Industry-Siemens',
      component: WorkIndustrySiemens
    },
    {
      path: '/projects',
      name: 'Work',
      component: Work
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/ResumeShort',
      name: 'ResumeShort',
      component: ResumeShort
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
