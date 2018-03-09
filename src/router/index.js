import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateUser from '@/components/CreateUser'
// import ListUser from '@/components/ListUser'
// import EditUser from '@/components/EditUser'
import DashboardUser from '@/components/DashboardUser'
// import CreateProvider from '@/components/CreateProvider'
import CreatePlan from '@/components/CreatePlan'
// import EditPlan from '@/components/EditPlan'
import DeletePlan from '@/components/DeletePlan'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/create-user',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/',
      name: 'create-plan',
      component: CreatePlan
    },
    {
      path: '/dashboard',
      name: 'dashboard-user',
      component: DashboardUser
    }
  ]
})
