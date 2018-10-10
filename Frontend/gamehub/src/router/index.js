import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'
import mines from '@/components/mine'
import checkers from '@/components/checkers'
import sudoku from '@/components/Sudoku'
import twenty from '@/components/twenty48'
import connect from '@/components/connect4'
import hangman from '@/components/hangman'
import trial from '@/components/trial'
import trial2 from '@/components/trial2'

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
    },
    {
      path: '/hangman',
      name: 'hangman',
      component: hangman
    },
    {
      path: '/minesweeper',
      name: 'mine',
      component: mines
    },
    {
      path: '/checkers',
      name: 'checkers',
      component: checkers
    },
    {
      path: '/sudoku',
      name: 'sudoku',
      component: sudoku
    },
    {
      path: '/connect4',
      name: 'connect4',
      component: connect
    },
    {
      path: '/twenty48',
      name: 'twenty48',
      component: twenty
    },
    {
      path: '/trial',
      name: 'trial',
      component: trial
    },
    {
      path: '/trial2',
      name: 'trail2',
      component: trial2
    }
  ]
})
