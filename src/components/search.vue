<template>
  <div id="content">
    <div class='header'>
      <div class='header-main'>
        <div class="header-back">
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
      <li v-for="(item, index) in searchResult" :key="index" 
        @click="goPlay(index, item.name, item.ar[0].name)"
        @touchstart="touchstart(index)" @touchmove="touchmove()" @touchend="touchend()">
        <p class="song_name"> {{item.name}} </p>
        <p class="song_singer"> {{item.ar[0].name}} </p> 
        <hr style="opacity:0.2">
        <!-- <button type="button" class="downloadBtn" v-if="showDownload&&(curIndex==index)"
         @click="goPlay(index, item.name, item.ar[0].name, 'download')">下载</button> -->
      </li>
    </div> 
    <div class="bottomslideContainer" v-bind:style="{top: top}">
      <div class="emptySlider" :class="{emptySlide: showDownload}"
       @click="slideBack()">
      </div>
      <div class="slideMenu">
        <li @click.stop="download()"> 下载 </li>
        <li @click.stop="keep()"> 添加到播放列表 </li>
        <li @click.stop="toNext()"> 下一首播放 </li>
      </div>
      
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
      touchTimeOut: undefined,
      showDownload: false,
      curIndex: 0,
      top: '100%'
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
        let vm = this;
        setTimeout(function(){
          vm.searchMsgDisplay = false;
        },10)
      },
      goSearch() {
        let vm = this;
        //var songID = "";
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            "type": 'search',
            "s": this.search_text,
            "limit": 20
          }
        }).then(function (res) {
          vm.searchResult = res.data.result.songs;
          //vm.songID = res.data.result.songs[0].id;
          //vm.getSongByUrl(vm.songID);
        });
        this.searchMsgDisplay = false;
      
      },
      goPlay(index, name, singer) {
        let vm = this;
        let id = this.searchResult[index].id;
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            "type": 'song',  
            "id": id, 
            "br": '12800'
          }
        }).then(function(res) {
          console.log(res.data);
          let url = res.data.data[0].url;
          let curSong = {name: name, singer: singer, src: url, picUrl: vm.searchResult[index].al.picUrl};
          vm.$store.commit('setFirstlyLoad', false);
          vm.$store.commit('setCurrentSong', curSong);
          
        })
      },
      toNext() {
        let vm = this;
        let id = this.searchResult[this.curIndex].id;
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            "type": 'song',  
            "id": id, 
            "br": '12800'
          }
        }).then(function(res) {
          console.log(res.data);
          let url = res.data.data[0].url;
          let insertedSong = {
            name: vm.searchResult[vm.curIndex].name, 
            singer: vm.searchResult[vm.curIndex].ar[0].name,
            src: url, 
            picUrl: vm.searchResult[vm.curIndex].al.picUrl
          };
          vm.$store.commit('setInsertedSong', insertedSong);
        })
      },
      keep() {
        let vm = this;
        let id = this.searchResult[index].id;
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            "type": 'song',  
            "id": id, 
            "br": '12800'
          }
        }).then(function(res) {
          console.log(res.data);
          let url = res.data.data[0].url;
          let addedSong = {
            name: vm.searchResult[vm.curIndex].name, 
            singer: vm.searchResult[vm.curIndex].ar[0].name,
            src: url, 
            picUrl: vm.searchResult[vm.curIndex].al.picUrl
          };
          vm.$store.commit('addSongs', addedSong);          
        })
      },
      touchstart(index) {
        this.touchTimeOut = setTimeout(this.longPress, 800);
        this.curIndex = index;
      },
      touchmove() {
        clearTimeout(this.touchTimeOut);
      },
      touchend() {
        clearTimeout(this.touchTimeOut);
        //console.log("end")
      },
      longPress() {
        var vm = this;
        var interval = setInterval(function() {
          var t = parseInt(vm.top);
          if(t > 10) {
            vm.top = t - 10 + '%';
          }else {
            clearInterval(interval);
          }
        }, 20);
        this.showDownload = true;
      },
      // download() {
      //   var url = this.getSongByUrl(this.searchResult[this.curIndex].id);        
      //   var a = document.createElement('a');
      //   a.href = url;
      //   a.download = this.searchResult[this.curIndex].name + '.mp3';
      //   a.click();
      // },
      slideBack() {
        if(this.showDownload) {
          var vm = this;
          var interval = setInterval(function() {
            var t = parseInt(vm.top);
            if(t < 100) {
              vm.top = t + 10 + '%';
            }else {
              clearInterval(interval);
            }
          }, 20);
          this.showDownload = false;
        }
      }
  },
  mounted() {
    this.$store.commit('setIsFooterPlayerShow', true);
  },
  components: {
  }
}
</script>
<style>
body, html{
  height: 100%;
}
#content {
  height: 100%;
}
</style>

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
  height: 80%;
  overflow: auto;
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
.downloadBtn {
  width: 100%;
  margin-top: 0;
  background-color: azure;
  border-radius: 5px;
  padding: 5px;
  outline: none
}
.bottomslideContainer {
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 100;
}
.slideMenu {
  height: 40%;
  width: 100%;
  background-color: white;
  overflow: auto;
  position: relative;
  text-align: left;
  padding: 10px 10px;
}
.slideMenu li {
  margin-top: 10px;
}
.slideMenu li:first-child {
  cursor: not-allowed;
}
.emptySlider {
  height: 60%;
  width: 100%;
}
</style>
