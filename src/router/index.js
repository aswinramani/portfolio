import Vue from 'vue'
import Router from 'vue-router'
import home  from '@/components/home'
import projects  from '@/components/projects'
import contact  from '@/components/contact'
import details  from '@/components/details'

Vue.use(Router)
var routerObj = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/projects', name: 'projects', component: projects},
    {path: '/projects/:name', name: 'details', component: details},
    {path: '/contact', name: 'contact', component: contact}
  ]
})
export default routerObj
