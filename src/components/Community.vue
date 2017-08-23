<template>
  <div>
    <navbar-all :isActive_myMusic=false :isActive_music=false :isActive_community=true></navbar-all>
    <!-- <navbar-all></navbar-all> -->
     <form>
      <input type="text" name="username" v-model="userName"> <br>
      
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
import navbarAll from './navbarAll'
import axios from 'axios'

var color="", fontSize=0;
export default {
  name: 'community',
  data () {
    return {
      msg: 'Welcome to community',
      userName: ''
    }
  },
  methods: {
    addUser() {
      var name = this.userName;
      axios.post('/api/user/addUser', {
        params: {
          username: name
        } 
      }).then((response) => {
        console.log(response);
      })
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
