<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <div class="col-4"></div> -->
      <div class="col-4 offset-3">
        <h2 class="text-center">Aswin Ramani</h2>
        <p>Hello! I am a self-taught developer who loves building machine learning driven products and web applications. I would love to combine my professional experience in web development and passion for machine learning to contribute to this ongoing revolution in computing.</p>
        <p>I have a diverse set of skills ranging from web development, cloud deployment to applying machine learning in computer vision and finance domains. </p>    
        <p><img src="../assets/pic.jpeg"/></p>
        <p>
          <a><font-awesome-icon :icon="github" size="lg"/></a>
          <a><font-awesome-icon :icon="linkedin" size="lg"/></a>
        </p>
        <hr/>
      </div>  
      <!-- <div class="col-4"></div> -->
    </div>
  </div>  
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/fontawesome-free-brands'
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to My Personal Site'
    }
  },
  computed: {
    github () {
      return faGithub
    },
    linkedin (){
      return faLinkedin
    }
  },  
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 30%;
  border-radius: 50%;
}
</style>
