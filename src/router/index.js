import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyMusic from '@/components/MyMusic'
import Music from '@/components/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: MyMusic
    },
    {
      path: '/music',
      name: 'music', 
      component: Music
    }
  ]
})
