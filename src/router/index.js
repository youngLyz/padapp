import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/pages/Login'
import UserRegister from '@/pages/Register'
import Home from '@/pages/Home'
import Exercise from '@/pages/exercise/Exercise'

import App from '@/App'

Vue.use(Router)

Router.prototype.go = function () {
  this.isBack = true
  console.log("router.go:"+this.isBack)
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: App,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/exer',
          name: 'Exercise',
          component: Exercise
        },
        {
          path:'/fastTest',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/FastTest')),'FastTest')
        },
        {
          path:'/testStart',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/TestStart')),'TestStart')
        },
        {
          path: '/testItem',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/TestItem')),'TestItem')
        },        
        {
          path: '/scoreCard',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/ScoreCard')),'ScoreCard')
        },
         {
          path:'/pointTest',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/PointTest')),'PointTest')
        },
         {
          path:'/simulateTest',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/SimulateTest')),'SimulateTest')
        },
         {
          path:'/testHis',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/TestHis')),'TestHis')
        },
        {
          path:'/wrongTest',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/WrongTest')),'WrongTest')
        },
        {
          path: '/login',
          name: 'UserLogin',
          component: UserLogin
        },
         {
          path: '/register',
          name: 'UserRegister',
          component: UserRegister
        }
      ]
    }  

  ],
  scrollBehavior (to, from, savedPosition) {//设置页面初始位置为顶部
    return { x: 0, y: 0 }
  }
})
