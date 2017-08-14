<template>
    <div class="footer" v-if="isFooterPlayerShow">
        <div class="footerLeftSide">
            <span class="song-small-img"></span>
            <div style="display: inline-block">
                <p class="name">{{curSong.name}}</p>
                <p class="singer">{{curSong.singer}}</p>
            </div>
        </div>
        <div class="footerRightSide">
            <canvas :class="{playBtn:!isPlaying, pausedBtn:isPlaying}" @click="togglePlay()" id="circleCanvas"></canvas>
        </div>
          <!-- <span :class="{playBtn:!isPlaying, pausedBtn:isPlaying}" @click="togglePlay()"></span>   -->
        <audio :src="curSong.src" style="inline"  id="myAudio" @timeupdate="drawRing()"
         @ended="autoNext()" @canplay="start()">
        </audio>
        
    </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'

 export default {
  name : 'player',
  data () {
      return {
          btnPlay: false,
          isPlaying: false,
          isFirstlyLoad: true,
          allSongs: [
              {index: 0, name: '千千阙歌', singer: '陈乐基', src: '../../static/陈乐基 - 千千阙歌.mp3'},
              {index: 1, name: '如梦一场', singer: '李健', src: '../../static/李健 - 梦一场.mp3'},
              {index: 2, name: '我很快乐', singer: '刘惜君', src: '../../static/刘惜君 - 我很快乐.mp3'}
          ]
      }
  },
  computed: {
      ...mapGetters({
          curSong: 'currentSong',
          isFooterPlayerShow: 'isFooterPlayerShow'
      })
  },
  mounted(){
    this.init()
  },
  methods: {
      init(){
          this.drawRing();
      },
    togglePlay(){
        var myAudio = document.getElementById('myAudio');
        if (!this.btnPlay){
            myAudio.play(); this.isPlaying = true;
        }else {
            myAudio.pause(); this.isPlaying = false;
        }
        this.btnPlay = !this.btnPlay;
        if(this.isFirstlyLoad) this.isFirstlyLoad = false;
    },
    autoNext(){
        var _currentSong = this.allSongs[this.curSong.index==2 ? 0 : (this.curSong.index+1)];
        this.$store.commit('setCurrentSong', _currentSong);
    },
    start(){
        if(this.isFirstlyLoad) return;
        var myAudio = document.getElementById('myAudio');
        myAudio.play();
        this.btnPlay = true;
        this.isPlaying = true;
    },
    /**
 * ==================================
 * opts.parent 插入到哪里 一个JS元素对象
 * opts.width 宽度 = 2* (半径+弧宽)  
 * opts.radius 半径
 * opts.arc 弧宽
 * opts.perent 百分比 
 * opts.color 弧渲染颜色 [底色,进度色]
 * opts.textColor 文字渲染颜色
 * opts.textSize 文字渲染大小
 * opts.animated 是否以动画的方式绘制 默认false
 * opts.after 绘制完成时执行函数
 * ==================================
 **/
drawRing:function () {
    var _opts = {
        parent: document.body,
        width: 46,
        radius: 21,
        arc: 4,
        perent: 100,
        color: ['#ccc', '#e11'],
        textColor: '#000',
        textSize: '14px',
        animated: false,
        after: function() {}
    }, k;
    // for (k in opts) _opts[k] = opts[k];
    
    var parent = _opts.parent,
        width = _opts.width,
        radius = _opts.radius,
        arc = _opts.arc,
        perent = parseFloat(_opts.perent),
        color = _opts.color,
        textSize = _opts.textSize,
        textColor = _opts.textColor,
        c = document.createElement('canvas'),
        ctx = null,
        x = 0,
        animated = _opts.animated,
        after = _opts.after;
        ctx = document.getElementById("circleCanvas").getContext('2d');
        var myAudio = document.getElementById('myAudio');
        x= myAudio.currentTime/myAudio.duration*100;
        ctx.canvas.width = width;
        ctx.canvas.height = width;

    function clearFill() {
        ctx.clearRect(0, 0, width, width);
    }

    function fillBG() {
        ctx.beginPath();
        ctx.lineWidth = arc;
        ctx.strokeStyle = color[0];
        ctx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function fillArc(x) {
        ctx.beginPath();
        ctx.lineWidth = arc;
        ctx.strokeStyle = color[1];
        ctx.arc(width / 2, width / 2, radius, -90 * Math.PI / 180, (x * 3.6 - 90) * Math.PI / 180);
        ctx.stroke();
    }

    function fillText(x) {
        ctx.font = textSize + ' Arial';
        ctx.fillStyle = textColor;
        ctx.textBaseline = "middle";
        ctx.textAlign = 'center';
        ctx.fillText(x.toFixed(1) + '%', width / 2, width / 2);
    }

    function fill(x) {
        //console.log(x);
        fillBG();
        fillArc(x);
        // fillText(x);
    }

    // if (!animated) return fill(perent);

    fill(x);
    // !function animate() {
    //     if (++x > perent) return after && after();
    //     setTimeout(animate, 10);
    //     clearFill();
    //     fill(x);
    // }();
    }
  },
  created: function () {
  },
//   mounted() {
//       var bus = new Vue();
//       var vm = this;
//       bus.$on('localSongs', function(localSongs) {
//           console.log(localSongs);
//       })
//   }
}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0%;
    width: 100%;
    border-top: 1px #ccc solid;
    padding: 5px;
}
.playBtn {
    background-image: url("../../static/img/playing.png");
    background-size: 40px 40px;
}
.pausedBtn {
    background-image: url("../../static/img/paused.png");
    background-size: 40px 40px;
}
#circleCanvas {
    background-size: 46px 46px;
    margin-right: 20px;
}
.footerLeftSide {
    text-align: left;
    float: left;
}
.footerRightSide {
    text-align: right;
    float:right
}
.song-small-img {
    background-image: url("../../static/img/5.jpg");
    background-size: 46px 46px;
    width: 46px;
    height: 46px;
    display: inline-block;
    margin-left: 0px;
    
}
p {
    font-size: 5px;
    margin: 0
}
.name {
    margin-bottom: 15px;
    font-size: 10px;
}
</style>




