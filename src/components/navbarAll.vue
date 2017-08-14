<template>
<div id="content">
  <div class='header'>
      <div class='header-main'>
        <div class="header-menu">
          <div class="menu">
            <img src="../../static/img/menu.png" @click.stop="slide">
          </div>
        </div>
        <div class="header-nav"  @click="link($event)">
          <div class="myMusic" v-bind:class="{activeBar: isActive_myMusic}" id="myMusic">
            <img src="../../static/img/music.png" id="myMusic">
          </div>
          <div class="music" v-bind:class="{activeBar: isActive_music}" id="music">
            <img src="../../static/img/main2.png" id="music">
          </div> 
          <div class="community" v-bind:class="{activeBar: isActive_community}" id="community">
            <img src="../../static/img/user.png" id="community">
          </div>
        </div>
          <div class="header-search" @click="link($event)">
            <div class="search">
              <img src="../../static/img/search.png" id="search">
            </div>
          </div>
      </div>
  </div>
    <div class="slideContainer" v-bind:style="{right: right}">
      <div class="slideMenu">
        <img src='../../static/img/background.jpg' id="backgroundImg">
        <div class="allInfo">
          <span id="avatar"> </span>
          <div class="textInfo">
            <span id="name">周焕丰</span>
            <span id="level">Lv.5</span>
            <span id="sign">签到</span>
          </div>
        </div>
        <div>
          <li v-for="(item, index) in slideMenus" :key="index">
            {{item.text}}
          </li>
          <hr noshade="noshade">
          <li v-for="(item, index) in around" :key="index">
            {{item.text}}
          </li>
          <hr noshade="noshade">
          <li v-for="(item, index) in functions" :key="index">
            {{item.text}}
          </li>
        </div>
        <hr style="opacity:0.1;position:relative;">
        
        
      </div>
      <div class="sliderFooter">
          <span>夜间模式</span><span>设置</span><span>退出</span>
        </div>
      <div class="emptySlider" @click="slideBack" v-bind:class="{emptySlide: isSliderShow}">
        
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'navbarAll',
  props: ['isActive_myMusic', 'isActive_music','isActive_community'],
  data () {
    return {
      //isActive_myMusic: true,
      //isActive_music: false,
      //isActive_community: false,
      right: '100%',
      isSliderShow: false,
      slideMenus: [
        {text: '我的消息', value: 'myMessage'},
        {text: '会员中心', value: 'vipCenter'},
        {text: '商城', value: 'store'},
        {text: '在线听歌免流量', value: 'onlineEnjoy'}
      ],
      around: [
        {text: '我的好友', value: 'myFriends'},
        {text: '附近的人', value: 'around'}        
      ],
      functions: [
        {text: '个性换肤', value: 'myFriends'},
        {text: '听歌识曲', value: 'autoRecognize'},
        {text: '定时停止播放', value: 'timer'},
        {text: '扫一扫', value: 'scan'},
        {text: '音乐闹钟', value: 'alarm'},
        {text: '驾驶模式', value: 'driveMode'},
        {text: '音乐云盘', value: 'cloud'},
        {text: '音乐云盘', value: 'cloud'},
        {text: '音乐云盘', value: 'cloud'},
        
      ]
    }
  },
  methods: {
    link: function (event) {
      // if (event.target.id == 'myMusic'){
      //   this.isActive_myMusic = true;
      //   this.isActive_community = this.isActive_music = false;
      // }else if (event.target.id == 'music') {
      //   this.isActive_music = true;
      //   this.isActive_community = this.isActive_myMusic = false;
      // }else if (event.target.id == 'community') {
      //   this.isActive_community = true;
      //   this.isActive_music = this.isActive_myMusic = false;
      // }
      //console.log(isActive1);
      if (event.target.id) {
        this.$router.push({ path: '/'+event.target.id })
      }
    },
    slide: function () {
      var vm = this;
      var slideMenu = document.querySelector('.slideMenu');
      var interval = setInterval( function() {
        var r = parseInt(vm.right)
        if(r > 0) {
          vm.right = r - 10 + '%';
        }else{
          clearInterval(interval);
        }
      }, 20);
      this.isSliderShow = true;
      this.$emit('toDisable', this.isSliderShow);
    },
    slideBack: function () {
      console.log("inin")
      if (this.isSliderShow) {
        console.log("in");
        var vm = this;
        var slideMenu = document.querySelector('.slideMenu');
        var interval = setInterval( function() {
          var r = parseInt(vm.right)
          if(r < 100) {
            vm.right = r + 10 + '%';
          }else{
            clearInterval(interval);
          }
        }, 20);
        this.isSliderShow = false;
        this.$emit('toDisable', this.isSliderShow);
      }
    }
  },
  mounted() {
    
  }
}

</script>

<style>
.menu, .search {
  width:25px;
  height:25px;
}
.menu img, .search img {
  display:block;
  width:100%;
  height:100%;
}
</style>


<style scoped>

html,body {
  overflow: auto;
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
  justify-content:space-between;
  align-items:center;
  padding:0 18px;
}
.header-menu {
  width:10%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.header-nav {
  width:40%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
}
.header-search {
  width:10%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}

.music, .myMusic {
  width:30px;
  height:100%;
}
.community {
  width:30px;
  height:100%;
}
.myMusic img, .music img,
.community img{
  display:block;
  width:100%;
  height:50%;
  opacity: 0.5;
  margin-top: 50%
}

.activeBar img {
  opacity: 1
}
.slideContainer{
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 100;
  top: 0;
}
.slideMenu {
  height: 120%;
  width: 85%;
  float: left;
  background-color: white;
  overflow: auto;
}
li {
  list-style: none;
  margin: 10px 0 0 10px;
  font-size: 15px;
}
.emptySlider {
  width: 15%;
  height: 100%;
  float: right;
}
.emptySlide {
  background-color: white;
  opacity: 0.5;
}
#backgroundImg {
  width: 100%;
}
.allInfo {
  position: absolute;
  top: 10%;
  width: 85%;
  text-align: left;
  padding-left: 10px;
}
#avatar {
    background-image: url("../../static/img/avatar.jpg");
    display: inline-block;
    width: 65px;
    height: 65px;
    border-radius: 65px;
    background-size: 65px 65px;
    background-color: #ccc;
}
.background-text {
  color: white;
  width: 100%;
  position: absolute;
  top: 10%;
}
.textInfo {
  position: relative;
  color: white;
  margin-left: 4px;
  display: block;
}
#level {
  border: 1px solid white;
  border-radius: 6px;
  font-size: 0.5em;
  padding: 0 2px;
}
#sign {
  position: absolute;
  margin-top: -3px;
  border: 1px solid white;
  border-radius: 16px;
  left: 78%;
  font-size: 0.8em;
  padding: 4px 8px;
}
hr {
  opacity:0.2;
  height:6px;
}
.sliderFooter {
  position: fixed;
  
  bottom: 0%
}
.sliderFooter span {
  margin-left: 20px;
}
</style>

