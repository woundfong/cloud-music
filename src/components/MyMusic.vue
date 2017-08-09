<template>
  <div id="myMusic">
     <!-- <navbar-all></navbar-all> -->
     <h1> {{ msg }} </h1>
     <button  v-on:click="greet">click</button>
  </div>
</template>

<script>
  import navbarAll from './navbarAll'

  export default {
    name: 'myMusic',
    data () {
      return {
        msg: 'Welcome to mymusic'
      }
    },
    methods: {
      greet: function() {
        console.log("aaaa");
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
</style>
