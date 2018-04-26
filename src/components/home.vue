<template>
  <b-container id="home">
      <b-row id="content-home">
        <b-col md="1" offset-md="2" class="text-center"><img src="../assets/pic.jpeg"/></b-col>
        <b-col md="8" class="text-left">
          <!-- <article> -->
            <ul>
              <p>
                Hi! I am a self-taught developer, who loves applying machine learning to computer vision, finance domains and building scalable web applications.
              </p>  
              <br/>
            </ul>
          <!-- </article> -->
        </b-col>
      </b-row>  
  </b-container>
</template>

<script>
export default {
  name: 'home',
  methods:{
    homeClick(){
      console.log("this", this.$router)
      //v-on:click="homeClick"
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #home {
  position: absolute;
  top: 35%;
  min-width: 70%;
  left: 10%;
}
h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
#home {
  padding: 20px 0px 20px 0px;
  background-color: #f7f7f7;
  border-radius: 10px;
}
#content-home {
  padding: 10px 0px 0px 0px;
}
ul {
  list-style-type: none;
}
p {
  margin-top: 20px;
  margin-left: 20px;
}
img {
  border-radius: 50%;
  /* width: 50%; */
  min-width: 75px;
  max-width: 100px;
} 

</style>
