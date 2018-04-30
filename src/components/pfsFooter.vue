<template>
  <b-container>
    <!-- <b-row>
      <b-col md class="text-center">
        <span>Powered by <a id="vue" href="https://vuejs.org/" target="_blank"><font-awesome-icon :icon="vuejs"/></a></span> |
        <span><a id="github" href="https://github.com/aswinramani?tab=repositories" target="_blank"><font-awesome-icon :icon="github"/></a></span> 
        <span><a id="linked-in" href="https://www.linkedin.com/in/aswin-ramani/" target="_blank"><font-awesome-icon :icon="linkedIn"/></a></span>
      </b-col>
    </b-row> -->
    <b-row id="copyright">
      <b-col md class="text-center">
        <span><font-awesome-icon :icon="copyright"/> Aswin Ramani {{year}}</span>
      </b-col>  
    </b-row>  
  </b-container>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {faVuejs, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import faCopyright from '@fortawesome/fontawesome-free-solid/faCopyright'

export default {
  name: 'pfsFooter',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {
    vuejs() {
      return faVuejs;
    },
    copyright() {
      return faCopyright;
    },
    linkedIn() {
      return faLinkedin;
    },
    github() {
      return faGithub;
    }
  },  
  components: {
    FontAwesomeIcon
  }
}  
</script>
<style>
span {
  padding: 0px 5px 0px 5px;
}
#vue, #linked-in, #github {
  color: black;
}
#vue:hover {
  color: #00a025;
}
#linked-in:hover {
  color: #006097;
}
#github:hover {
  color: gray;
}
#copyright {
  padding-top: 20px;
}

</style>