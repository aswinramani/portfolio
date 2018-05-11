<template>
  <b-container>
    <b-row class="justify-content-md-center content-about">
      <b-col md="8" class="content-about-wrapper">
        <article>
          <h5 class="heading">About</h5>
          <p>I am a machine learning engineer with experience in full stack web development, computer vision, image processing, and predictive analytics.
Over the last couple of years, I have developed multiple projects in the areas of machine learning and web development. This experience has honed my algorithmic and programming skills in addition to the ability to contribute effectively in a geographically distributed team environment. Apart from developing, I help my dad in looking after our agriculture lands which produce rice, black gram, green gram and sesame seeds.</p>
        </article>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center content-about">
      <b-col md="8" class="content-about-wrapper">
        <article>
          <h4 class="heading">Professional Experience</h4>
          <p>I worked as a Software Engineer at Navaratan Technologies, which is a startup company based in Hyderabad. At Navaratan Technologies, I contributed to the development of asset management (post-production work) web applications, currently, used by major studios like Paramount and Lionsgate. Apart from development, I have manually and automatically deployed the code using Amazon CloudFront and  Bamboo continuous integration.</p>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      myself: [
        {title: "About", description: "I have developed multiple projects in the areas of machine learning and web development in the last couple of years. This experience has honed my algorithmic and programming skills in addition to the ability to contribute effectively in a geographically distributed team environment."},
        {title: ""}
      ]
    }
  }
}
</script>
<style scoped>
.content-about-wrapper{
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f7f7f7;
}
.heading {
  font-size: 1.1rem;
}
</style>
