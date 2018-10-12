import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'
import mines from '@/components/mine'
import checkers from '@/components/checkers'
import sudoku from '@/components/Sudoku'
import twenty from '@/components/twenty48'
import connect from '@/components/Connect4'
import memory from '@/components/memorymatch'
import reversi from '@/components/ReversiGrid'
import hangman from '@/components/hangman'
import myscores from '@/components/myscores'
import allscores from '@/components/allscores'
import login from '@/components/login'
import signup from '@/components/signup'
import welcome from '@/components/welcome'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
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
      path: '/myscores',
      name: 'myscores',
      component: myscores
    },
    {
      path: '/allscores',
      name: 'allscores',
      component: allscores
    }
  ]
})
