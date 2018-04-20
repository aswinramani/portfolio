<template>
  <div id="app"> 
    <router-view></router-view>
    <div class="pws-navbar">
      <navbar></navbar>
    </div> 
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
  margin-top: 2%;
}
.pws-navbar {
  margin: 10px
}
</style>
