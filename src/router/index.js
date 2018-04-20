import Vue from 'vue'
import Router from 'vue-router'
import About  from '@/components/About'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
