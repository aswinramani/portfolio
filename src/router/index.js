import Vue from 'vue'
import Router from 'vue-router'
import home  from '@/components/home'
import projects  from '@/components/projects'
import contact  from '@/components/contact'
import details  from '@/components/details'

Vue.use(Router)
var routerObj = new Router({
  routes: [
    {path: '/', name: 'home', component: home},
    // {path: '/projects', name: 'projects', component: projects,
    //   children: [
    //     { path: '/:id', name: 'details', component: details }
    //   ]
    // },
    {path: '/projects', name: 'projects', component: projects},
    {path: '/projects/:id', name: 'details', component: details},
    {path: '/contact', name: 'contact', component: contact}
  ]
})
// console.log("routerObj ", routerObj)
// console.log("routerObj ", routerObj.options.routes)
export default routerObj
