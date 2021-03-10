import Vue from 'vue'
import Router from 'vue-router'
import MemoApp from '@/components/MemoApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemoApp',
      component: MemoApp
    }
  ]
})
