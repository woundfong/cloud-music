<template>
  <div id="myMusic">
    <li v-for="(item,index) in MusicList" v-bind:key="item.id" @click="jump(item)">
      <img src="static/img/next.png"></img>{{item}}<hr style="opacity:0.1;position:relative;left:50px;"></li>
  </div>
</template>

<script>
import navbarAll from './navbarAll'

export default {
  name: 'myMusic',
  data() {
    return {
      MusicList: ['本地音乐', '最近播放', '下载管理', '我的电台', '我的收藏'],
      msg: 'Welcome to mymusic'
    }
  },
  methods: {
    greet: function () {
      console.log("aaaa");
    },
    jump:function(item){
      console.log('jump to:'+item);
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
#myMusic{
  text-align: left;
  margin-top: 70px;
}
#myMusic img{
  vertical-align: middle;
  width:7%;
  margin: 10px 15px;
}
</style>
