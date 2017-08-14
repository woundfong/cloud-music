<template>
  <div>
    <navbar-all :isActive_myMusic=false :isActive_music=false :isActive_community=true></navbar-all>
    <!-- <navbar-all></navbar-all> -->
     <h1> {{ msg }} </h1>
  </div>
</template>

<script>
import navbarAll from './navbarAll'
var color="", fontSize=0;
export default {
  name: 'community',
  data () {
    return {
      msg: 'Welcome to community'
    }
  },
  mounted() {
    this.$store.commit('setIsFooterPlayerShow', true);
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
