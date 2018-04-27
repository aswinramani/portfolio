<template>
  <b-container class="details">
    <b-row>
      <b-col class="text-left">
        <router-link :to="{ name: 'projects'}" >  
          <b-button size="sm" variant="primary">Back</b-button>
        </router-link> 
      </b-col>
    </b-row>  
    <b-row class="justify-content-md-center">
      <b-col md>
        <article>
          <h5>{{$route.params.name}}</h5>
        </article>
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
    return {
      msg: "Details"
    }
  }
}
</script>
<style scoped>

</style>
