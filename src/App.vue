<template>
  <div id="app" v-on:click="mainClick($event)">
    <header> 
      <pfsHeader></pfsHeader>
    </header>
    <main>  
      <router-view></router-view> 
    </main>  
    <footer>
      <pfsFooter></pfsFooter>
    </footer>  
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
  },
  methods: {
    mainClick: function (event) {
      var header = event.path.filter(function(e){ return e.id == "pfsHeader"})
      if (this.$children["0"].expanded && header.length < 1){
        this.$children["0"].$router.go()
      }  
    }
  }
}
</script>
<style>
html,body  {
  height: 100%;
}
#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 99%;
}
</style>
