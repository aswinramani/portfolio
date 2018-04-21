<template>
    <header class="row">
      <div class="col-5">
        <p class="text-left">Aswin Ramani</p>
      </div>  
      <div class="col-1 offset-2">
        <router-link :to="{ path: '/' }">Home</router-link>
        <!-- <p class="text-right">Home</p> -->
      </div>
      <div class="col-1 offset-1">
        <router-link v-bind:to="'projects'">Projects</router-link>
        <!-- <p class="text-right">Projects</p> -->
      </div>
      <div class="col-1 offset-1">
        <router-link v-bind:to="'contact'">Contact</router-link>
        <!-- <p class="text-right">Contact</p> -->
      </div>
    </header>
</template>
<script>
export default {
  name: "pfsHeader"
}
</script>
<style scoped>
header {
  margin: 1%
}
</style>