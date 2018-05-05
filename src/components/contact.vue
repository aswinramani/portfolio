<template>
  <b-container class="contact">
    <b-row class="justify-content-md-center">
      <b-col md="8" class="contact-wrapper">
          <p class="text-center">
            You can either mail me  <a href="mailto:aswinramani5@gmail.com">aswinramani5@gmail.com</a>
          </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col md="8" class="contact-wrapper">
        <h2 class="text-center"> Or </h2>
      </b-col>
    </b-row>  
    <b-row class="justify-content-md-center">
      <b-col md="8" class="contact-wrapper">
          <p class="text-center">
            send me a message 
            <span>
              <a id="linked-in" href="https://www.linkedin.com/in/aswin-ramani/" target="_blank">
                <font-awesome-icon :icon="linkedIn" size="lg"/>
              </a>
            </span>
            <span>
              <a id="twitter" href="https://twitter.com/aswin_ramani/" target="_blank">
                <font-awesome-icon :icon="twitter" size="lg"/>
              </a>
            </span>
          </p>
      </b-col>
    </b-row>  
  </b-container>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {faLinkedin, faTwitter} from '@fortawesome/fontawesome-free-brands'
export default {
  name: "contact",
  computed: {
    linkedIn() {
      return faLinkedin;
    },
    twitter() {
      return faTwitter;
    }
  },  
  components: {
    FontAwesomeIcon
  }
}
</script>
<style scoped>
.contact{
  padding-top: 15px;
  padding-bottom: 15px;
} 
.contact-wrapper{
  padding: 15px;
  background-color: #f7f7f7;
}
a:hover{
  text-decoration: none;
}
#linked-in, #twitter {
  color: #6c757d;
}
#linked-in:hover {
  color: #006097;
}
#twitter:hover {
  color: #1c94e0;
}  
</style>
