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
let router = new Router({
  //mode: 'history',
 // base: 'padExam/pages',//导出后所在的根目录
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
        } ,
        {
          path: '/exam',
          name: 'Exam',
          component: Exam
        }
      ]
    }, 
      {
        path: '/admin',
        component: r =>require.ensure([],() =>r(require('../pages/Admin')),'Admin')
      },
      {
        path:'/readBook/:bookId',
        component: r =>require.ensure([],() =>r(require('../pages/reader/ReadBook')),'ReadBook')
      },
        {
          path:'/examStart',
          component: r =>require.ensure([],() =>r(require('../pages/exam/ExamStart')),'ExamStart')
        },
        {
          path:'/fastTest',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/FastTest')),'FastTest')
        },
        {
          path:'/testStart/:pt_id',
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
          path:'/testHisItem',
          component: r =>require.ensure([],() =>r(require('../pages/exercise/TestHisItem')),'TestHisItem')
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
    },
    {
      path: '/myWrong',      
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/MyWrong')),'MyWrong')
    },
    {
      path: '/myWrongDetail/:id',      
      component: r =>require.ensure([],() =>r(require('../pages/userCenter/MyWrongDetail')),'MyWrongDetail')
    }
        
  ],
  scrollBehavior (to, from, savedPosition) {//设置页面初始位置为顶部
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to,from,next)=>{
  //console.log("localStorage:"+window.localStorage);
  let accessToken = window.localStorage.getItem("accessToken");  

  if(!accessToken){//不存在用户

    if(to.path=='/login'){
      next();
    }else{
      next('/login')    
    }
  }else{
    if(to.path=='/admin'){
      next();
    }else{
      JSI.verifyUser(JSON.parse(accessToken),(res)=>{
        console.log("verifyUser:"+JSON.stringify(res));
        if(res.id){
          if(res.type==1){//用户
            next();
          }else{//管理员
            next('/admin'); 
          }
        }else{
            console.error('invalid accessToken:'+accessToken);
            window.localStorage.removeItem("accessToken")
            next('/login');
          }
         
      });
    }
    
  }
});

export default router;