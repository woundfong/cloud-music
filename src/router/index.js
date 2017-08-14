import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import myMusic from '@/components/myMusic'
import music from '@/components/music'
import community from '@/components/community'
import localMusic from '@/components/myMusic/localMusic'
import playing from '@/components/playing'
import search from '@/components/search'
import personalSuggest from '@/components/music/personalSuggest'
import rankList from '@/components/music/rankList'
import singerList from '@/components/music/singerList'
import songsList from '@/components/music/songsList'

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
      component: music,
      children:[
        {
          path: '/',
          name: 'home',
          component: personalSuggest
        },
        {
          path: '/music/personalSuggest',
          name: 'personalSuggest',
          component: personalSuggest
        },
          {
      path: '/music/rankList',
      name: 'rankList',
      component: rankList
    },
    {
      path: '/music/singerList',
      name: 'singerList',
      component: singerList
    },
    {
      path: '/music/songsList',
      name: 'songsList',
      component: songsList
    }  
      ]
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
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
