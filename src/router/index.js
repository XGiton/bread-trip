import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/Login'
import { checkAuth } from '../api'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

// 注册守卫
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const result = await checkAuth()
    if (!result) {
      next({
        path: '/sign-in',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
