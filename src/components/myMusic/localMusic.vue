<template>
  <div>
    <div class='header'>
      <div class='header-main'>
        <div class="header-menu">
          <div class="menu">
            <img src="../../../static/img/back.png" @click="goBack()">
          </div>
        </div>
        <div class="header-name">
          <span>本地音乐</span>
        </div>
        <div class="header-search">
          <div class="search">
            <img src="../../../static/img/search.png">
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
var color="", fontSize=0;
export default {
  name: 'community',
  data () {
    return {
    }
  },
  methods: {
      goBack(){
          window.history.go(-1);
      }
  },
  components: {
    
  },
  mounted() {
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.header-name {
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  font-size: 1.1em;
  color: white;
  width: 100%;
  margin-left: 10px;
}
.header-search {
  width:10%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
</style>
