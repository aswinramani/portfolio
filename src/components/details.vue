<template>
  <b-container class="details">
    <b-row class="justify-content-md-center">
      <b-col md>
      <b-jumbotron text-variant="black" border-variant="light">
        <template slot="header">
          {{project.title}}
        </template>
        <article>
          <div class="heading"><span class="marker-left">Background information</span></div>
            <p>{{project.background}}</p>
          <div class="heading"><span class="marker-left">Solution</span></div>
            <ul v-for="(value, key) in project.solution" :key="key">
              <li>{{value}}</li>
            </ul>  
          <div class="heading"><span class="marker-left">Software and Libraries</span></div>
            <ul id="lib" v-for="(value, key) in project.lib" :key="key">
              <li>{{value}}</li>
            </ul>
        </article>
        <div id="back-btn">
          <a v-bind:href="project._link" target="_blank">
            <b-button size="md" variant="outline-info" onclick="this.blur();">View Repository</b-button>
          </a>
          <router-link :to="{ name: 'projects'}">  
              <b-button size="md" variant="primary">Back</b-button>
          </router-link>
        </div>  
      </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import projects  from '@/components/projects'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {faVuejs, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
export default {
  name: "projectdetail",
  components: {
    projects
  },
  data() {
    var _parent = projects.data()
    var name = this.$route.params.name
    var project = _parent.projects.filter(function(o){ return o.name == name})
    return {
      msg: "Details",
      project: project[0]
    }
  },
  computed: {
    github() {
      return faGithub;
    }
  },  
  components: {
    FontAwesomeIcon
  }
}
</script>
<style scoped>
.display-3{
  font-size: 3.5rem;
  border-bottom-style: solid;
  border-bottom-color: #ced4da;
  border-bottom-width: 1px;
}
article {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: #ced4da;
  border-bottom-width: 1px;
}
.heading {
  font-weight: 200;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.marker-left {
  border-left-style: solid;
  border-left-color: #20c997;
  border-left-width: 4px;
}
p {  
  font-size: 15px;
  font-weight: 100;
  padding-left: 10px;

}
#lib {
  list-style-type: circle;
}
#back-btn {
  padding-top: 10px;
}

</style>
