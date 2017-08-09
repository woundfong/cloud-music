import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import myMusic from '@/components/myMusic'
import music from '@/components/music'
import community from '@/components/community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: myMusic
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: myMusic
    },
    {
      path: '/music',
      name: 'music', 
      component: music
    },
    {
      path: '/community',
      name: 'community',
      component: community
    }
  ]
})
