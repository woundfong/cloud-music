<template>
  <div>
    <!-- <navbar-all></navbar-all> -->
     <div class="carousel-wrap" id="carousel">
      <transition-group tag="ul" class="slide-ul" name="list">
        <li v-for="(list, index) in slideList" :key="index" v-show="index===currentIndex" @mouseover="stop" @mouseout="go">
          <!-- <a :href="list.clickUrl"> -->
          <a>
            <img :src="list.image" :alt="list.desc">
          </a>
          <div class="decoration">
          </div>
        </li>
      </transition-group>
      <div class="carousel-items">
        <span v-for="(item,index) in slideList" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import navbarMusic from './navbarMusic'
export default {
  name: 'personalSuggest',
  data () {
    return {
       slideList:[
      {
        //"clickUrl": "#",
        "desc": "nhwc",
        "image": "../../../static/img/1.jpg"
      },
      {
        //"clickUrl": "#",
        "desc": "hxrj",
        "image": "../../../static/img/2.jpg"
      },
      {
        //"clickUrl": "#",
        "desc": "rsdh",
        "image": "../../../static/img/3.jpg"
      },
      {
        //"clickUrl": "#",
        "desc": "bhwc",
        "image": "../../../static/img/4.jpg"
      }, 
      {
        //"clickUrl": "#",
        "desc": "jhwc",
        "image": "../../../static/img/5.jpg"
      },
    ],
    currentIndex: 0,
    timer: '',
    }
  },
  created() {
      this.$nextTick(()=>{
        this.timer = setInterval(()=>{
          this.autoPlay()
        },4000)
      })
    },
  methods:{
    go() {
      this.timer = setInterval(()=>{
          this.autoPlay()
      },4000)    
    },
    stop(){
      clearInterval(this.timer)
      this.timer = null
    },
    change(index){
      this.currentIndex = index
    },
    autoPlay(){
      this.currentIndex++
      if(this.currentIndex > this.slideList.length - 1){
        this.currentIndex = 0
      }
    }
  },
  components: {
    navbarMusic
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    margin-top: 50%;
  }
   .carousel-wrap {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.slide-ul li{
  position: absolute;
  width: 100%;
  height: 100%;
}
.slide-ul li img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  /* z-index: 10; */
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}
.carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
.carousel-items span .active {
 
}

.decoration {
  height: 2px;
}

.list-enter-active {
  transition: all 1s ease;
  transform: translateX(0)
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>