import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import checkers from '@/components/checkers'
import checkersfunc from '@/components/checkersfunc'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/checkers',
      name: 'checkers',
      component: checkers
    },
    {
      path: '/checkersfunc',
      name: 'checkersfunc',
      component: checkersfunc
    }
  ]
})
