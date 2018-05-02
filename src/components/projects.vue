<template>
  <b-container class="projects">
      <b-row class="justify-content-md-center" v-for="project in projects" :key="project.id">
        <b-col col md="8" id="project-wrapper">
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
        { 
          id: 1, 
          name: "object-detection",
          title: "Object Detection",
          overview: "Developed a algorithm to detect objects within images captured by drone. ", 
          background:"Many large infrastructure companies have adopted to use drones for land surveillance as they provide a higher level of absolute accuracy in precision mapping and reduced man-hours compared to traditional land survey methods. To determine a position of a point in a map with respect to the real world,  physical markers called ground control points are placed on the ground as per the areas of interest. The coordinates of the ground control points are then fed into drone-mapping software to determine the absolute position.  This process of detecting the ground control points and determining the absolution position manually is complex and time-consuming.  Since ground control points have specific dimensions (which may vary across companies), it is possible to develop an algorithm to detect these markers within images by applying computer vision techniques.",   
          solution: {
            12: "Generated a template image based on the shape of the ground control point for searching ground control points.",
            13: "Implemented function to read all inputs from the source directory.",
            14: "Rescaled input images using image pyramids.",
            15: "Applied rotational transformations to detect ground control point irrespective of its orientation.",
            16: "Implemented template matching technique for detecting ground control points and determine their coordinates.",
            17: "Implemented function to output the locations in a CSV file."
          },  
          lib: {
            18: "Python 3",
            19: "OpenCV",
            20: "NumPy",
            21: "Pandas",
            22: "Matplotlib"
          },
          _link: "https://github.com/aswinramani/skyd/tree/object-detection"
        },
        {
          id: 2, 
          name: "stock-price-prediction", 
          title: "Stock Price Predictor", 
          overview: "Developed a stock price predictor that makes use of past trading data to produce projected estimates. The dataset that would be used to develop the machine learning model will predict the adjusted close price of a stock, which is a numerical value. The prediction would be made for the next seven trading days.", 
          background:"Many investment firms have been using financial models for predicting stock prices to yield profits. The stock prediction has been performed for quite some time and mainly there are two types of stock analysis: fundamental analysis and technical analysis. Fundamental Analysis is a complete top to the bottom approach where the investors tend to study factors like overall economy, country's economy, sector analysis and company analysis to compare the current price of a stock against their own calculated intrinsic value which could possibly give them a good indication of whether a stock is undervalued or overvalued. Technical analysis assumes that the fundamental analysis has already been accounted for a company's current stock price and hence it predicts a stock's price based on its past movements. This type of investment strategy is generally used by short-term investors, where holding periods could range anywhere from seconds to weeks. Applying machine learning for stock prediction is a very popular and a profitable real-world problem. Hence, there's no surprise that many would be interested in finding a great prediction algorithm to make tons of money.",
          solution: {
            23: "Implemented training interface where the users would be allowed to choose stock tickers of their choice and training period.",
            24: "Implemented querying interface where users could retrieve the predictions of stocks which are the subset of the ones mentioned in training interface.",
            25: "Used Quandl for retrieving stock data.",
            26: "Implemented function to compute leading and lagging technical indicators.",
            27: "Applied logarithm transformation to highly skewed features. As rule of thumb skewness is considered as high if it is either greater than 1 (positive skewness) or lesser than -1 (negative skewness).",
            28: "Implemented a function which would calculate the absolute value of negatively skewed feature and then multiply by -1 because the log of 0 is undefined.",
            29: "Applied normalization by taking the minimum and maximum of each feature and scaling them to 0 and 1.",
            30: "Implemented a function to choose the best model based on the r-squared score.",
            31: "Implemented a function to apply grid search technique to further optimize the best model and return the best estimator based on the r-squared scores of optimized and unoptimized models. If the best estimator is LinearSVR, then grid search wouldn't be applied.",
            32: "Implemented function to output the predictions in a CSV file."
          }, 
          lib:{
            33: "Python 2",
            34: "Numpy",
            35: "Pandas",
            35: "Scikit-Learn",
            36: "TA-Lib",
            37: "Arrow"
          },
          _link: "https://github.com/aswinramani/MLND-Capstone"
        },
        {
          id: 3, 
          name: "image-classification",
          title: "Image Classification",
          overview: "Developed a Convolutional Neural Network based dog breed classifier that accepts images from the user as input and predicts the breed.", 
          background:"background", 
          solution: "solution",
          lib:"lib",
          _link: "https://github.com/aswinramani/dog-project"
        }
      ]
    }
  }
}
</script>
<style scoped>
.projects {
  padding-top: 20px;
  padding-bottom: 20px;
}
#project-wrapper {
  padding: 15px;
  background-color: #f7f7f7;
}
#project-content {
  padding: 20px 0px 20px 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #ced4da;
}
</style>