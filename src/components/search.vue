<template>
  <div id="content">
    <div class='header'>
      <div class='header-main'>
        <div class="header-back"  @click="goBack">
            <img id="back" src="../../static/img/back.png" @click="goBack()">
        </div>
        <form>
          <input type="text" v-model="search_text" placeholder="搜索音乐、歌手、歌词、用户"
           @focus="showSearchMsg()" @blur="searchBlur()" required>
        </form>
      </div>
    </div>
    <div class="searchMsg" v-if="search_text&&searchMsgDisplay">
      <li @click="goSearch()"> 搜索 "{{search_text}}"</li>
    </div>
     <div class="searchResult">
      <li v-for="(item, index) in searchResult" :key="index" @click="goPlay(index, item.name, item.ar[0].name)">
        <p class="song_name"> {{item.name}} </p>
        <p class="song_singer"> {{item.ar[0].name}} </p> 
        <hr style="opacity:0.2">
      </li>
    </div> 
     
  </div>
</template>

<script>
import axios from 'axios'
import footerPlayer from './footerPlayer'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      search_text: "",
      searchMsgDisplay: true,
      searchResult: [],
      songUrl: "",
      songID: ""
    }
  },
  methods: {
      goBack() {
          window.history.go(-1);
      },
      showSearchMsg() {
        if (this.search_text) {
          this.searchMsgDisplay = true;
        }
      },
      searchBlur() {
        var vm = this;
        setTimeout(function(){
          vm.searchMsgDisplay = false;
        },10)
      },
      goSearch() {
        var vm = this;
        //var songID = "";
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            "type": 'search',
            "s": this.search_text,
            "limit": 5
          }
        }).then(function (res) {
          vm.searchResult = res.data.result.songs;
          vm.songID = res.data.result.songs[0].id;
          //vm.getSongByUrl(vm.songID);
        });
        this.searchMsgDisplay = false;
      
      },
      getSongByUrl(id, name, singer) {
        var vm = this;
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            "type": 'song',  
            "id": id, 
            "br": '12800'
          }
        }).then(function(res) {
          var url = res.data.data[0].url;
          var curSong = {index: 0, name: name, singer: singer, src: url}
          vm.$store.commit('setCurrentSong', curSong);
          vm.songUrl = res.data.data[0].url;
        })
      },
      goPlay(index, name, singer) {
        this.getSongByUrl(this.searchResult[index].id, name, singer);
        
      }
  },
  mounted() {
    this.$store.commit('setIsFooterPlayerShow', true);
  },
  components: {
  }
}
</script>

<style scoped>
html {
  overflow: auto
}
.header {
  width:100%;
  height:60px;
  position:fixed;
  top:0;
  z-index:20;
  background:#f44336;
  box-shadow:0px 1px 5px #ccc;
}
.header-main {
  height:100%;
  display:flex;
  align-items:center;
  padding:0 18px;
}
.header-back {
  width:10%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.header-back #back {
  display:block;
  width:25px;
  height:25px;
}
form {
  width: 100%;
}
input {
  border-bottom: 1px solid #dbdbdb;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  background-color: transparent;
  padding: 5px 0;
  margin-left: 10px;
  width: 100%;
  font-size: 1.1em;
  color: white
}
input:-moz-placeholder {
  color: white;
  opacity: 0.4
}
::-moz-placeholder {
  color: white;
  opacity: 0.4
}
::-webkit-input-placeholder {
  color: white;
  opacity: 0.4
}
.searchMsg {
  width: 90%;
  color: blue;
  background-color: #F8F8FF;
  margin: auto;
  text-align: left;
  padding: 10px;
}
.searchResult {
  text-align: left;
  padding: 5px 10px;
}
.song_singer {
  font-size: 0.5em
}
li p {
  margin-top: 0;
  margin-bottom: 0
}
.searchResult li:active {
  background-color: #F8F8FF
}
</style>
