<template>
    <b-navbar toggleable="sm" type="light" variant="gray" id="pfsHeader" v-on:click="toggler($event)">

      <b-navbar-toggle target="nav_collapse" id="toggle-button">
          <font-awesome-icon v-if="expanded" :icon="toggleUp"/>
          <font-awesome-icon v-else :icon="toggleDown"/>
      </b-navbar-toggle>

      <b-navbar-brand><router-link :to="{ path: '/' }">Aswin Ramani</router-link></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="text-left"><router-link :to="{ path: '/' }">Home</router-link></b-nav-item>
          <b-nav-item class="text-left"><router-link :to="{ path: '/me' }">About</router-link></b-nav-item>
          <b-nav-item class="text-left"><router-link :to="{ path: '/projects'}">Projects</router-link></b-nav-item>
          <b-nav-item class="text-left"><router-link :to="{ path: '/contact'}">Contact</router-link></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
</template>
<script>
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {faChevronCircleDown, faChevronCircleUp} from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'pfsHeader',
  clicked: false,
  data () {
    return {
      expanded: false,
      collElem: document.getElementById("nav_collapse")
    }
  },
  computed: {
    toggleUp (){
      return faChevronCircleUp;
    },
    toggleDown (){
      return faChevronCircleDown;
    }
  },  
  components: {
    FontAwesomeIcon
  },
  methods: {
    toggler: function (event) {
      this.clicked = true;
      if(window.innerWidth < 576){
        var toggleList = event.path.filter(function(e){ return e.id == "toggle-button"})
        var collElem = document.getElementById("nav_collapse")
        if (toggleList.length > 0){
            this._data.expanded = toggleList["0"].attributes[4].nodeValue == "false" 
        }else{
          collElem.classList.remove("show");
          this._data.expanded = false;
          this.$router.go()
        }
      }
    }
  }
}
</script>
<style scoped>
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
.router-link-exact-active {
  /* color: #17a2b8; */
  color: #007bff;
}

</style>