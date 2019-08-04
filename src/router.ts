import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
      meta: { title: 'Projects' }
    },
    {
      path: '/journal',
      name: 'journal',
      component: () => import('./views/Journal.vue'),
      meta: { title: 'Journal' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta: { title: 'Contact Us' }
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue'),
      meta: { title: 'Page Not Found' }
    }
  ]
})
