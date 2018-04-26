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
      if(window.innerWidth < 576){
        var header = event.path.filter(function(e){ return e.id == "pfsHeader"})
        if (this.$children["0"].expanded && header.length < 1){
          this.$children["0"].$router.go()
        }  
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
}
header {
  position: relative;
  padding: 20px;
  width: 100%;
  height: 20%;
}
main {
  position: relative;
  padding: 50px 0px 50px 0px;
  width: 100%;
  height: 100%;
}
footer {
  width: 100%;
  padding: 20px 0px 20px 0px;
}


</style>
