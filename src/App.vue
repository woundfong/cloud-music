<template>
  <div id="app">
    <router-view></router-view>
    <footerPlayer />
  </div>
</template>

<script>
import navbarAll from './components/navbarAll'
import footerPlayer from './components/footerPlayer'

export default {
  name: 'app',
  data () {
    return {
      isSliderShow: false,
    }
  },
  methods: {
    change: msg => {
      this.isSliderShow = msg;
      console.log(this.isSliderShow);
    }

  },
  components: {
    navbarAll,
    footerPlayer
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
html,body {
  width:100%;
  height:100%;
  overflow: hidden;
}
body {
  margin: 0;
}
.lowOpacity{
  opacity: 0.6;

}
li {
  list-style: none;
}
.footerPlayer {
    position: fixed;
    bottom: 0%;
    width: 100%;
    border-top: 1px #ccc solid;
    padding: 5px;
    z-index: 200
}
</style>
