<template>
  <div>
    <!-- <navbar-all></navbar-all> -->
     <h1> {{ msg }} </h1>
  </div>
</template>

<script>
import navbarMusic from './navbarMusic'
export default {
  name: 'singerList',
  data () {
    return {
      msg: 'Welcome to singerList'
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
</style>