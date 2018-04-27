import Vue from 'vue'
import Router from 'vue-router'
import home  from '@/components/home'
import projects  from '@/components/projects'
import contact  from '@/components/contact'

Vue.use(Router)
var routerObj = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/projects/:id', 
      component: projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
// console.log("routerObj ", routerObj)
// console.log("routerObj ", routerObj.options.routes)
export default routerObj
