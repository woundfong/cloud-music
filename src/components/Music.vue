<template>
  <div>
    <h1> {{ msg }} </h1>
  </div>
</template>


<script>
export default {
  name: 'music',
  data () {
    return {
      msg: 'Welcome to music'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    margin-top: 50%;
  }
</style>
