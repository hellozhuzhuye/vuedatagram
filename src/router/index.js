import Vue from 'vue'
import Router from 'vue-router'
import DataGram from '@/components/DataGram'
import HlhtDecrypt from "../components/HlhtDecrypt";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'DataGram',
        component: DataGram
      },
      {
        path: '/DataGram',
        name: 'DataGram',
        component: DataGram
      },
      {
        path: '/HlhtDecrypt',
        name: 'HlhtDecrypt',
        component: HlhtDecrypt
      }
    ]
  })
