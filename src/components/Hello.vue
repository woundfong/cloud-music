<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to cloud-music'
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
