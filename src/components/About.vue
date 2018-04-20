<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-2">
        <img src="../assets/pic.jpeg" class="float-right"/>
      </div>
      <div class="col-6">
        <h3 class="text-left">Aswin Ramani</h3>
        <hr/>
        <p class="text-left"> Hi, there I am a Software Engineer who specializes in machine learning and web development</p>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to My Personal Site'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 50%;
  border-radius: 50%;
}
</style>
