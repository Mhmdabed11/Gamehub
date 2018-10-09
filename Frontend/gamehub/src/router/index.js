import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignupForm',
      component: SignupForm
    },
    {
      path: '/LoginForm',
      name: 'LoginForm',
      component: LoginForm
    }
  ]
})
