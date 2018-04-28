<template>
  <b-container class="details">
    <b-row class="justify-content-md-center">
      <b-col md>
      <b-jumbotron text-variant="black" border-variant="light">
        <template slot="header">
          {{project.title}}
        </template>
        <article>
          <div class="heading">Background information</div>
          <div class="heading">Solution</div>
          <div class="heading">Software and Libraries</div>
        </article>
        <router-link :to="{ name: 'projects'}" >  
            <b-button size="md" variant="primary">Back</b-button>
        </router-link>
      </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import projects  from '@/components/projects'
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
  }
}
</script>
<style scoped>
.display-3{
  font-size: 3.5rem;
}
.heading {
  font-weight: 300;
  font-size: 1.2rem;
}

</style>
