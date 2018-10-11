import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'
import mines from '@/components/mine'
import checkers from '@/components/checkers'
import sudoku from '@/components/Sudoku'
import twenty from '@/components/twenty48'
import connect from '@/components/connect4'
import memory from '@/components/memorymatch'
import reversi from '@/components/ReversiGrid'
import hangman from '@/components/hangman'
import trial from '@/components/trial'
import trial2 from '@/components/trial2'
import trial3 from '@/components/trial3'
import login from '@/components/login'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/reversi',
      name: 'reversi',
      component: reversi
    },
    {
      path: '/memory',
      name: 'memory',
      component: memory
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
    },
    {
      path: '/trial3',
      name: 'trail3',
      component: trial3
    }
  ]
})
