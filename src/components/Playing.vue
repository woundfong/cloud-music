<template>
  <!-- <div class="content" :style="{backgroundImage: 'url('+pic+')'}"> -->
    <div class="content">
    <h2>{{currentSong.name}}</h2>
    <pre class="lrc">{{lyric[i]}}</pre>
    <img class="rotate-img" :class="{stop:!isPlay,run:isPlay}" :src="pic">
    <audio :src="currentSong.src" preload loop style="width: 100%;" id="player" @canplay="showLrc" @timeupdate="updateCur"></audio>
    <!-- cur表示当前时间 max表示总时长 input表示进度条 -->
    <div>
      <span class='cur'>{{current|formatSeconds}}</span>
      <input type="range" min=0 max=100 class='range' :style="{background:move}" :value="Cur" @input="change">
      <span class='max'>{{duration|formatSeconds}}</span>

    </div>
    <img class="my-img" 　src="static/img/pre2.png" @click="pre()"></img>
    <span :class="{Play:!isPlay,Paused:isPlay}" @click="play()"></span>
    <img class="my-img" src="static/img/next2.png" @click="next()"></img>
  </div>
</template>

<script>
import Global from './Global'
import navbarAll from './navbarAll'
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Playing',
  data() {
    return {
      musicUrl: '',
      i: 0,
      MusicList: [],
      pic: '',
      lyric: [],
      currentSong: {},
      isPlay: false,
      duration: 0,
      current: 0,
      Cur: 0,
      clorL: '#ea1717',
      clorR: '#ccc',
      move: 'linear-gradient(to right, #fff 0% , #ccc 0%)'
    }
  },
  mounted() {
    this.MusicList = Global.allSongs;
    this.currentSong = this.MusicList[0];
  },
  computed: {
    ...mapGetters({
          currentSong: 'currentSong',
          // isFooterPlayerShow: 'isFooterPlayerShow',
          // isFirstlyLoad: 'firstlyLoad'
      })
  },
  filters: {
    formatSeconds: function (value) {
      if (isNaN(value)) return '0:00';
      var theTime = parseInt(value);// 秒
      var theTime1 = 0;// 分
      var theTime2 = 0;// 小时
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
        }
      }
      if (parseInt(theTime) < 10) {
        var result = "0:0" + parseInt(theTime) + "";
      } else {
        var result = "0:" + parseInt(theTime) + "";
      }
      if (theTime1 > 0) {
        if (parseInt(theTime) < 10) {
          result = "0" + parseInt(theTime);
        } else {
          result = parseInt(theTime);
        }
        result = "0" + parseInt(theTime1) + ":" + result;
      }
      /*if(theTime2 > 0) {
      result = ""+parseInt(theTime2)+"小时"+result;
      }*/
      return result;
    }
  },
  methods: {
    showLrc: function () {
      let tmp = this.currentSong.lrc;
      let id = '';
      axios.get('https://api.imjad.cn/cloudmusic/', {
        params: {
          'type': 'search',
          's': this.currentSong.name,
        }
      }).then((res) => {
        this.pic = res.data.result.songs[0].al.picUrl;
        id = res.data.result.songs[0].id;
        axios.get('https://api.imjad.cn/cloudmusic', {
          params: {
            'type': 'lyric',
            'id': id
          }
        }).then((res) => {
          let data = res.data;
          console.log(res)
          let lrcStr = data.lrc.lyric;
          // this.pic = data.result.songs[0].al.picUrl;
          this.parseLrc(lrcStr);
          return this.lyric;
        })
      })

      // return 'wuwangluo'
      // buffer.
    },
    parseLrc: function (str) {
      console.log(str);
      this.lyric = [];
      let a = str.split('\n');
      a.shift();

      for (let item of a) {
        let t = item.split(']')[0].substring(1);
        let second = parseInt(t.split(':')[0]) * 60 + parseInt(t.split(':')[1]);
        if (second) {
          this.lyric[second] = item.split(']')[1]
        }
        // console.log(second)
      }
      let reg = /^\[.+\]/;
      // console.log(this.lyric)
      // let 
    },
    play: function () {
      let player = document.getElementById('player');
      if (player.paused) {
        player.play();
        this.isPlay = true;
      }
      else { player.pause(); this.isPlay = false; }
      this.duration = player.duration;
    },
    pre: function () {
      let len = this.MusicList.length;
      let index = ((this.currentSong.index - 1) == -1) ? 3 : (this.currentSong.index - 1);
      this.currentSong = this.MusicList[index];
      setTimeout(function () { this.Cur = 0; }, 100);
      let player = document.getElementById('player');
      console.log(player.load())
    },
    next: function () {
      this.Cur = 0;
      let len = this.MusicList.length;
      let index = (this.currentSong.index + 1) % len;
      this.currentSong = this.MusicList[index];

      console.log(this.Cur);
      let player = document.getElementById('player');
      // while(player.readyState!=4)console.log(player.currentSrc);
      player.autoplay = "autoplay";
      player.autoplay = "none";
    },
    updateCur: function () {
      let player = document.getElementById('player');
      this.duration = player.duration;
      this.current = player.currentTime;
      // console.log(this.current/this.duration);
      let Cur = player.currentTime / this.duration * 100;
      if (!isNaN(Cur)) {
        this.Cur = Cur;
      }
      let tm = parseInt(this.current);
      if (this.lyric[tm])
        this.i = tm;
      console.log(this.i)
      let psent = parseInt(this.Cur) + '%';
      this.move = 'linear-gradient(to right, ' + this.clorL + ' ' + psent + ',' + this.clorR + ' ' + psent + ')';
      // console.log(player.currentSrc);

    },
    change: function (event) {


      let player = document.getElementById('player');
      player.currentTime = event.target.value * this.duration / 100;
      console.log(event.target.value);
    },
  },
  components: {
    navbarAll,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 50%;
}


li {
  list-style: none;
}

.cur,
.max {
  color: #fff;
  font-size: .5em;
  vertical-align: middle;
}

.lrc {
  width: 100%;
  height: 450px;
}

#myMusic {
  text-align: left;
  margin-top: 70px;
}

.content {
  /* filter: blur(15px); */
  background-color: rgba(10, 10, 10, .5);
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 200;
  color: #fff;
}

.Play {
  display: inline-block;
  background: url("../../static/img/playing.png");
  vertical-align: middle;
  width: 44px;
  height: 44px;
  background-size: 44px 44px;
  margin: 10px 15px;
}

.Paused {
  display: inline-block;
  background: url("../../static/img/paused.png");
  vertical-align: middle;
  width: 44px;
  height: 44px;
  background-size: 44px 44px;
  margin: 10px 15px;
}

.my-img {
  vertical-align: middle;
  width: 7%;
  margin: 10px 15px;
}

.rotate-img {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  position: absolute;
  top: 150px;
  left: 10%;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  25% {
    transform: rotate(90deg)
  }
  50% {
    transform: rotate(180deg)
  }
  75% {
    transform: rotate(270deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.run {
  animation: rotate 20s linear infinite;
  animation-play-state: running;
}

.stop {
  animation: rotate 20s linear infinite;
  animation-play-state: paused;
}




/* 进度条 */

.range {
  vertical-align: middle;
  background: linear-gradient(to right, #2386e4 50%, #fff 50%);
  width: 78%;
  height: 0.15rem;
  /* background: #2386e4;   */
  border-radius: 0.25rem;
  -webkit-appearance: none !important;
  /* top: 3.55rem;
  left: 6rem; */
}



/* 进度滑块 */

.range::-webkit-slider-thumb {
  width: .70em;
  height: .70em;
  background: #ea1717;
  box-shadow: 0 0 0px 3px rgba(200, 200, 200, .7);
  cursor: pointer;
  border-radius: .4em;
  -webkit-appearance: none !important;
}
</style>
