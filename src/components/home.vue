<template>
  <div id="home" class="row">
    <div class="col-2 offset-1">
      <img src="../assets/pic.jpeg"/>
    </div>
    <div class="col-9">
      <p class="text-left">Hi! I am a self-taught developer, who loves applying </p>
      <p class="text-left">machine learning to computer vision, finance domains and </p>
      <p class="text-left">building scalable web applications.</p>
      <!-- <p class="text-left">driven products and web applications.</p> -->
    </div>
  </div>  
</template>

<script>
export default {
  name: 'home'
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  position: absolute;
  top: 35%;
  min-width: 70%;
  left: 10%;
}
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
  border-radius: 50%;
  width: 50%;
  min-width: 75px;
}
</style>
