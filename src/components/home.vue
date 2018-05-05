<template>
  <b-container class="home">
    <b-row class="content-home">
        <b-col md="2" offset-md="2" class="text-center content-home-wrapper">
          <img src="../assets/pic.jpeg"/>
        </b-col>
        <b-col md="6" class="content-home-wrapper">
          <span id="description">
            Hi! I'm Aswin.
          </span>  
          <span>I'm a machine learning engineer and a full stack web developer.</span>
        </b-col>
    </b-row>
    <!-- <b-row class="justify-content-md-center content-home">
        <b-col md="8" class="content-home-wrapper">
          <article>
            <span class="heading">About</span>
            <p>I have developed multiple projects in the areas of machine learning and web development in the last couple of years. This experience has honed my algorithmic and programming skills in addition to the ability to contribute effectively in a geographically distributed team environment.</p>
          </article>
        </b-col>
    </b-row> -->
  </b-container>
</template>
<script>
export default {
  name: 'home',
  methods:{
    homeClick(){
      // console.log("this", this.$router)
      //v-on:click="homeClick"
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 20px 0px 20px 0px;
}
.content-home {
  padding: 20px 0px 0px 0px;
}
.content-home-wrapper{
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f7f7f7;
}
span {
  
  display: inline-block;
}
#description {
  margin-top: 20px;
  /* margin-left: 20px;  */
}
article {
  /* padding-left: 10px; */
}
.heading {
  padding: 20px 0px 0px 0px;
  font-weight: 500;
  font-size: 18px;
}

ul {
  list-style-type: none;
}
p {

}
img {
  border-radius: 50%;
  /* width: 50%; */
  min-width: 75px;
  max-width: 100px;
} 

</style>
