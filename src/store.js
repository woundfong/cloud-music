import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export const store=new Vuex.Store({
    state: {
        currentSong: {index: 0, name: '千千阙歌', singer: '陈乐基', src: '../../static/陈乐基 - 千千阙歌.mp3'},
        isFooterPlayerShow: true,
        firstlyLoad: true
    },
    getters: {
        currentSong:state=>state.currentSong,
        isFooterPlayerShow:state=>state.isFooterPlayerShow,
        firstlyLoad:state=>state.firstlyLoad
    },
    mutations: {
        setCurrentSong: (state, curSong)=>{state.currentSong = curSong;},
        setIsFooterPlayerShow: (state, show)=>{state.isFooterPlayerShow = show},
        setFirstlyLoad: (state, notFirst)=>{state.firstlyLoad=notFirst}
    }
})