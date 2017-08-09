<template>
  <div id="app">
    <navbar-all></navbar-all>
    <router-view></router-view>
  </div>
</template>

<script>
import navbarAll from './components/navbarAll'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    navbarAll
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
}
html,body {
  width:100%;
  height:100%;
}
body {
  margin: 0;
}

</style>
