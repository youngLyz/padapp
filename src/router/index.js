import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/pages/Login'
import UserRegister from '@/pages/Register'
import Home from '@/pages/Home'
import Exercise from '@/pages/exercise/Exercise'
import UserCenter from '@/pages/UserCenter'
import Exam from '@/pages/Exam'
import Read from '@/pages/Read'

import Layout from '@/components/Layout'

import App from '@/App'



/*Router.prototype.go = function () {
  this.isBack = true
  console.log("router.go:"+this.isBack)
  window.history.go(-1)
}
*/
Router.prototype.openPage = function (link,order) {
  this.push({
    path: link,
    query: {
      order: order
    }
  })
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
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
          path: '/userCenter',
          name: 'UserCenter',
          component: UserCenter
        },
         {
          path: '/read',
          name: 'Read',
          component: Read
        },
         {
          path: '/exam',
          name: 'Exam',
          component: Exam
        }
      ]
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
          path: '/testItem/:prevUrl',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/TestItem')),'TestItem')
        },        
        {
          path: '/scoreCard/:prevUrl',
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
    },

    {
      path: '/userInfo',
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/UserInfo')),'UserInfo')
    },
    {
      path: '/userPswd',
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/Pswd')),'UserPswd')
    },
     {
      path: '/system',
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/System')),'UserSystem')
    },
    {
      path: '/detail/:id',
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/Detail')),'PageDetail')
    },
    {
      path: '/setting',
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/Setting')),'UserSetting')
    }
        
  ],
  scrollBehavior (to, from, savedPosition) {//设置页面初始位置为顶部
    return { x: 0, y: 0 }
  }
})
