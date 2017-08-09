<template>
  <div id="app">
    <div class='header'>
      <div class='header-main'>
        <div class="header-menu">
          <div class="menu">
            <img src="../static/img/menu.png">
          </div>
        </div>
        <div class="header-nav">
          <div class="music">
            <router-link to="/myMusic"> <img src="../static/img/music.png"> </router-link>
          </div>
          <div class="main">
            <router-link to="/music"> <img src="../static/img/main2.png"> </router-link>
          </div> 
          <div class="user">
            <router-link to="/community"><img src="../static/img/user.png"> </router-link>
          </div>
        </div>
        <div class="header-search">
          <div class="search">
            <img src="../static/img/search.png">
          </div>
        </div>
      </div>
    </div>
     
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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
html,body{
  width:100%;
  height:100%;
}
.header{
  width:100%;
  height:60px;
  position:fixed;
  top:0;
  z-index:20;
  opacity:1;
  background:#f44336;
  box-shadow:0px 1px 5px #ccc;
}
.header-main{
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 18px;
}
.header-menu{
  width:10%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.header-nav{
  width:40%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
}
.header-search{
  width:10%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.menu,
.search{
  width:25px;
  height:25px;
}
.main,
.music{
  width:30px;
  height:30px;
}
.user{
  width:30px;
  height:33px;
}
.menu img,
.main img,
.music img,
.user img,
.search img{
  display:block;
  width:100%;
  height:100%;
}

</style>
