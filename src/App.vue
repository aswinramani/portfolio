<template>
  <div id="app" class="container"> 
    <!-- <div class="pws-navbar"> -->
      <navbar></navbar>
    <!-- </div> -->
    <!-- <div class="pws-content"> -->
      <router-view></router-view> 
    <!-- </div> -->
  </div>
</template>
<script>
// import navbar from '@'
import navbar  from '@/components/Navbar'
export default {
  name: 'app',
  components:{
    navbar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px;
}
.pws-navbar {
  margin: 1%
}
</style>
