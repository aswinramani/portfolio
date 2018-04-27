<template>
  <b-container class="projects">
      <b-row class="justify-content-md-center" v-for="project in projects" :key="project.id">
        <b-col col md>
          <article id="project-content">
            <h4>{{project.title}}</h4>
            <p>{{project.overview}}</p>
            <router-link :to="{ name: 'details', params: { name: project.name } }">
              <b-button size="sm" variant="primary">Project Details</b-button>
            </router-link>  
          </article>
        </b-col>
      </b-row>
  </b-container>      
</template>
<script>
export default {
  name: "project",
  data() {
    return {
      msg: "Projects",
      projects: [
        {id: 1, name: "object-detection", title: "Object Detection", overview: "Developed a algorithm to detect objects within images captured by drone. "},
        {id: 2, name: "stock-price-prediction", title: "Stock Price Predictor", overview: "Developed a stock price predictor that makes use of past trading data to produce projected estimates. The dataset that would be used to develop the machine learning model will predict the adjusted close price of a stock, which is a numerical value. The prediction would be made for the next seven trading days."}
      ]
    }
  }
}
</script>
<style scoped>
.projects {
  background-color: #f7f7f7;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
#project-content {
  padding: 20px 0px 20px 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #ced4da;
}
</style>