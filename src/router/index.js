import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateUser from '@/components/CreateUser'
import ListUser from '@/components/ListUser'
import EditUser from '@/components/EditUser'
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
      path: '/create-plan',
      name: 'create-plan',
      component: CreatePlan
    },    
    {
      path: '/dashboard/:id',
      name: 'dashboard-user',
      component: DashboardUser
    },
    {
      path: '/list-user',
      name: 'list-user',
      component: ListUser
    },
    {
      path: '/edit-user',
      name: 'edit-user',
      component: EditUser
    }
  ]
})
