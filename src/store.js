import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export const store=new Vuex.Store({
    state: {
        currentSong: {
            name: '千千阙歌', 
            singer: '陈乐基', 
            src: '../../static/陈乐基 - 千千阙歌.mp3', 
            picUrl: '../../static/img/5.jpg'
        },
        isFooterPlayerShow: true,
        firstlyLoad: true,
        lyric: '',
        songsList: [
              {name: '千千阙歌', singer: '陈乐基', src: '../../static/陈乐基 - 千千阙歌.mp3', picUrl: '../../static/img/5.jpg'},
              {name: '如梦一场', singer: '李健', src: '../../static/李健 - 梦一场.mp3', picUrl: '../../static/img/4.jpg'},
              {name: '我很快乐', singer: '刘惜君', src: '../../static/刘惜君 - 我很快乐.mp3', picUrl: '../../static/img/3.jpg'}
        ],
        curIndex: 0,
        ifInsert: false,
        insertedSong: {}
    },
    getters: {
        currentSong:state=>state.currentSong,
        isFooterPlayerShow:state=>state.isFooterPlayerShow,
        firstlyLoad:state=>state.firstlyLoad,
        lyric:state=>state.lyric,
        songsList:state=>state.songsList
    },
    mutations: {
        setCurrentSong: (state, curSong)=>{state.currentSong = curSong;},
        setIsFooterPlayerShow: (state, show)=>{state.isFooterPlayerShow = show},
        setFirstlyLoad: (state, notFirst)=>{state.firstlyLoad=notFirst},
        setLyric: (state, lyric)=>{state.lyric=lyric},
        addSongs: (state, song)=>{
            state.songsList.push(song);
        },
        autoNext: (state)=>{
            if(!state.ifInsert) {
                let len = state.songsList.length;
                state.curIndex = state.curIndex + 1;
                if(state.curIndex==len) {
                    state.curIndex = 0;
                }
                state.currentSong = state.songsList[state.curIndex];
            }else {
                state.ifInsert = false;
                state.currentSong = state.insertedSong;
            }
        },
        setInsertedSong: (state, song)=>{
            state.ifInsert = true;
            state.insertedSong = song;
        }
    }
})