import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export const store=new Vuex.Store({
    state: {
        currentSong: {
            index: 0, name: '千千阙歌', 
            singer: '陈乐基', 
            src: '../../static/陈乐基 - 千千阙歌.mp3', 
            picUrl: '../../static/img/5.jpg'
        },
        isFooterPlayerShow: true,
        firstlyLoad: true,
        lyric: ''
    },
    getters: {
        currentSong:state=>state.currentSong,
        isFooterPlayerShow:state=>state.isFooterPlayerShow,
        firstlyLoad:state=>state.firstlyLoad,
        lyric:state=>state.lyric
    },
    mutations: {
        setCurrentSong: (state, curSong)=>{state.currentSong = curSong;},
        setIsFooterPlayerShow: (state, show)=>{state.isFooterPlayerShow = show},
        setFirstlyLoad: (state, notFirst)=>{state.firstlyLoad=notFirst},
        setLyric: (state, lyric)=>{state.lyric=lyric}
    }
})