import Vue from 'vue'
import Router from 'vue-router'
import DataGram from '@/components/DataGram'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataGram',
      component: DataGram
    }
  ]
})
