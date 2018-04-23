<template>
    <header>
      <b-navbar toggleable="md" type="light" variant="gray">

        <b-navbar-toggle target="nav_collapse" id="toggle-button"></b-navbar-toggle>

        <b-navbar-brand><router-link :to="{ path: '/' }">Aswin Ramani</router-link></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="text-left"><router-link :to="{ path: '/' }">Home</router-link></b-nav-item>
            <b-nav-item class="text-left"><router-link v-bind:to="'projects'">Projects</router-link></b-nav-item>
            <b-nav-item class="text-left"><router-link v-bind:to="'contact'">Contact</router-link></b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </header>
</template>
<script>
export default {
  name: "pfsHeader"
}
</script>
<style scoped>
/* header {
  background-color: #f9f9f9;
} */
a {
  color: #2c3e50;  
}
a:hover{
  text-decoration: none;
  color: black;
  font-size: 101%;
}
#toggle-button {
  border: none;
  padding: 0px;
}
#toggle-button:focus {
    outline:none;
}
</style>