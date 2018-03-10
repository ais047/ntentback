import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
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
      name: 'Login',
      component: Login
    },
    {
      path: '/create-user',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/create-plan',
      name: 'CreatePlan',
      component: CreatePlan
    },    
    {
      path: '/dashboard/:id',
      name: 'DashboardUser',
      component: DashboardUser
    },
    {
      path: '/list-user',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/edit-user/:id',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
