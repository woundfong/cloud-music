<template>
<div id="content">
  <div class='header'>
      <div class='header-main'>
        <div class="header-menu">
          <div class="menu">
            <img src="../../static/img/menu.png">
          </div>
        </div>
        <div class="header-nav"  @click="link($event)">
          <div class="myMusic" v-bind:class="{activeBar: isActive_myMusic}">
            <img src="../../static/img/music.png" id="myMusic">
          </div>
          <div class="music" v-bind:class="{activeBar: isActive_music}">
            <img src="../../static/img/main2.png" id="music">
          </div> 
          <div class="community" v-bind:class="{activeBar: isActive_community}">
            <img src="../../static/img/user.png" id="community">
          </div>
        </div>
        <div class="header-search">
          <div class="search">
            <img src="../../static/img/search.png">
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'navbarAll',
  data () {
    return {
      isActive_myMusic: true,
      isActive_music: false,
      isActive_community: false
    }
  },
  methods: {
  link: function (event) {
    if (event.target.id == 'myMusic'){
      this.isActive_myMusic = true;
      this.isActive_community = this.isActive_music = false;
    }else if (event.target.id == 'music') {
      this.isActive_music = true;
      this.isActive_community = this.isActive_myMusic = false;
    }else if (event.target.id == 'community') {
      this.isActive_community = true;
      this.isActive_music = this.isActive_myMusic = false;
    }
    this.$router.push({ path: '/'+event.target.id })
  }
}
}

</script>

<style scoped>
.header {
  width:100%;
  height:60px;
  position:fixed;
  top:0;
  z-index:20;
  opacity:1;
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
.menu, .search {
  width:25px;
  height:25px;
}
.music, .myMusic {
  width:30px;
  height:30px;
}
.community {
  width:30px;
  height:33px;
}
.menu img, .myMusic img, .music img,
.community img, .search img {
  display:block;
  width:100%;
  height:100%;
  opacity: 0.5
}

.activeBar img {
  opacity: 1
}

</style>

