import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import myMusic from '@/components/myMusic'
import music from '@/components/music'
import community from '@/components/community'
import localMusic from '@/components/myMusic/localMusic'
import playing from '@/components/playing'

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
    },
    {
      path: '/myMusic/localMusic',
      name: 'localMusic',
      component: localMusic
    },
    {
      path: '/playing',
      name: 'playing',
      component: playing
    }
  ]
})
