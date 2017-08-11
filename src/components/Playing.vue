<template>
  <div class="content">
    {{current|formatSeconds}} / {{duration|formatSeconds}}
<audio src=
"../../static/你还要我怎样.mp3" loop controls style="width: 100%;" id="player" @timeupdate="updateCur"></audio>
 <!-- cur表示当前时间 max表示总时长 input表示进度条 -->
 <div>
 <span class='cur'></span><input type="range" min=0 max=100 class='range' :style="{background:move}" :value="Cur" @input="change"><span class='max'></span>
 
 </div>
 <img class="my-img"　src="static/img/pre.png" @click="pre()"></img><span :class="{Play:!isPlay,Paused:isPlay}" @click="play()"></span><img class="my-img" src="static/img/next.png" @click="next()"></img>
  </div>
</template>

<script>
import navbarAll from './navbarAll'
import axios from 'axios'
export default {
  name: 'Playing',
  data() {
    return {
      myList:['本地音乐', '最近播放', '下载管理', '我的电台', '我的收藏'],
      MusicList: [],
      isPlay:false,
      duration:0,
      current:0,
      Cur:0,
      clorL:'#2386e4',
      clorR:'#eee',
      move:'linear-gradient(to right, #fff 0% , #fff 0%)'
    }
  },
  filters:{
    formatSeconds:function (value) {
    var theTime = parseInt(value);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
    if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
            if(theTime1 > 60) {
            theTime2 = parseInt(theTime1/60);
            theTime1 = parseInt(theTime1%60);
        }
    }   
        if(parseInt(theTime)<10){
           var result = "0:0"+parseInt(theTime)+"";
        }else{
           var result = "0:"+parseInt(theTime)+""; 
        }
        if(theTime1 > 0) {
          if(parseInt(theTime)<10){
            result="0"+parseInt(theTime);
          }else{
             result=parseInt(theTime);
          }
        result = "0"+parseInt(theTime1)+":"+result;
        }
        /*if(theTime2 > 0) {
        result = ""+parseInt(theTime2)+"小时"+result;
        }*/
    return result;
}
  },
  methods: {
    play:function(){
      let player=document.getElementById('player');
      if(!this.isPlay){
         player.play(); 
         this.isPlay=!this.isPlay;
      }
      
      else {player.pause();this.isPlay=!this.isPlay;}
      this.duration = player.duration;
    },
    updateCur:function(){
      let player=document.getElementById('player');
      this.duration = player.duration;
      this.current=player.currentTime;
      console.log(this.current/this.duration);

        this.Cur = player.currentTime / this.duration * 100;
        let psent=parseInt(this.Cur)+'%';
        this.move='linear-gradient(to right, '+this.clorL+' '+psent+','+this.clorR+' '+psent+')';
        console.log(this.move);

    },
    change:function(event){
      console.log("in")

      let player=document.getElementById('player');
      player.currentTime = event.target.value*this.duration/100;
      console.log(event.target.value);
    },
    
    greet: function () {
      console.log("aaaa");
    },
    jump: function (item) {
      this.hsClass='showMain';
      console.log('jump to:' + item);

    }
  },
  components: {
    navbarAll
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

#myMusic {
  text-align: left;
  margin-top: 70px;
}
.Play{
    display: inline-block;
    background:url("../../static/img/playing.png") ;
  vertical-align: middle;
  width: 44px;
  height: 44px;
  background-size: 44px 44px;
  margin: 10px 15px;
}
.Paused{
    display: inline-block;
    background:url("../../static/img/pasued.png") ;
  vertical-align: middle;
  width: 44px;
  height: 44px;
  background-size: 44px 44px;
  margin: 10px 15px;
}
.my-img {
background-color: green;
  vertical-align: middle;
  width: 7%;
  margin: 10px 15px;
}
/* 进度条 */
.range {
  background: linear-gradient(to right, #2386e4 50% , #fff 50%);
    width: 80%;
    height: 0.15rem;
      /* background: #2386e4;   */
    border-radius: 0.25rem;
    -webkit-appearance: none !important;
    top: 3.55rem;
    left: 6rem; 
}
/* 进度滑块 */
.range::-webkit-slider-thumb {
    width: .75em;
    height: .75em;
    background: #28f;
    box-shadow: 0 0 1px 3px rgba(240,240,240,.9);
    cursor: pointer;
    border-radius: .4em;
    -webkit-appearance: none !important;
}

</style>
