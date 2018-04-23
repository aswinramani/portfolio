<template>
  <div id="app"> 
      <pfsHeader></pfsHeader>
      <!-- <router-view></router-view> 
      <pfsFooter></pfsFooter> -->
  </div>
</template>
<script>
import pfsHeader  from '@/components/pfsHeader'
import pfsFooter  from '@/components/pfsFooter'
export default {
  name: 'app',
  components:{
    pfsHeader,
    pfsFooter
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin: 50px; */
}
</style>
