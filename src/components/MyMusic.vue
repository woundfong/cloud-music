<template>
  <div id="myMusic">
    <navbar-all :isActive_myMusic=true :isActive_music=false :isActive_community=false ></navbar-all>
    <li v-for="(item,index) in MusicList" v-bind:key="item.value" @click="jump(item.value)">
      <img src="static/img/next.png"></img>{{item.text}}<hr style="opacity:0.1;position:relative;left:50px;"></li>
  </div>
</template>

<script>
import navbarAll from './navbarAll'

export default {
  name: 'myMusic',
  data() {
    return {
      MusicList: [
        {text: '本地音乐', value: 'localMusic'},
        {text: '最近播放', value: 'recent'},
        {text: '下载管理', value: 'download'}, 
        {text: '我的电台', value: 'radioStation'},
        {text: '我的收藏', value: 'collection'} 
        ],
      msg: 'Welcome to mymusic'
    }
  },
  methods: {
    greet: function () {
      console.log("aaaa");
    },
    jump:function(des){
      console.log('jump to:'+des);
      this.$router.push({ path: '/myMusic/' + des})
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
