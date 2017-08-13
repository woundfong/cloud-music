<template>
  <div>
    <navbar-all :isActive_myMusic=false :isActive_music=true :isActive_community=false></navbar-all>
    <div class="carousel-wrap" id="carousel">
      <transition-group tag="ul" class="slide-ul" name="list">
        <li v-for="(list, index) in slideList" :key="index" v-show="index===currentIndex" @mouseover="stop" @mouseout="go">
          <!-- <a :href="list.clickUrl"> -->
          <a>
            <img :src="list.image" :alt="list.desc">
          </a>
        </li>
      </transition-group>
      <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
      </div>
    </div>
    <!-- <navbar-all></navbar-all> -->
     <h1> {{ msg }} </h1> 
  </div>
</template>

<script>
import navbarAll from './navbarAll'

export default {
  name: 'music',
  methods:{
    
    created() {
      this.$nextTick(()=>{
        this.timer = setInterval(()=>{
          this.autoPlay()
        },4000)
      })
    },
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
  data () {
    return {
      slideList:[
      {
        //"clickUrl": "#",
        "desc": "nhwc",
        "image": "../../static/img/1.jpg"
      },
      {
        //"clickUrl": "#",
        "desc": "hxrj",
        "image": "../../static/img/2.jpg"
      },
      {
        //"clickUrl": "#",
        "desc": "rsdh",
        "image": "../../static/img/3.jpg"
      },
      {
        //"clickUrl": "#",
        "desc": "bhwc",
        "image": "../../static/img/4.jpg"
      }, 
      {
        //"clickUrl": "#",
        "desc": "jhwc",
        "image": "../../static/img/5.jpg"
      },
    ],
    currentIndex: 0,
    timer: '',
      msg: 'Welcome to music'
    }
  },
  components: {
    navbarAll
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
  height: 300px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  padding: 0;
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
