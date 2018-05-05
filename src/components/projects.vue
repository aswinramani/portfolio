<template>
  <b-container class="projects">
      <b-row class="justify-content-md-center" v-for="project in projects" :key="project.id">
        <b-col md="8" class="project-wrapper">
          <article class="project-content" v-if="project.isValid">
            <h4>{{project.title}}</h4>
            <p>{{project.overview}}</p>
            <router-link :to="{ name: 'details', params: { name: project.name } }">
              <b-button size="sm" variant="primary">Project Details</b-button>
            </router-link>  
          </article>
          <article v-else>
            <p>Projects mentioned above were the recent ones, please check my repository for a complete list of projects that I have worked on. </p>
            <a v-bind:href="project._link" target="_blank">
              <b-button size="sm" variant="primary" onclick="this.blur();">GITHUB</b-button>
            </a>  
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
            14: "Generated image pyramids for multiscale detection.",
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
          isValid: true,
          _link: "https://github.com/aswinramani/skyd/tree/object-detection"
        },
        {
          id: 2, 
          name: "stock-price-prediction", 
          title: "Stock Price Predictor", 
          overview: "Developed a stock price predictor that makes use of past trading data to produce projected estimates. The dataset that would be used to develop the machine learning model will predict the adjusted close price of a stock, which is a numerical value. The prediction would be made for the next seven trading days.", 
          background:"Many investment firms use financial models for predicting stock prices to yield profits. There are two types of stock analysis: fundamental analysis and technical analysis. Fundamental Analysis is a complete top to the bottom approach where the investors tend to study factors like overall economy, country's economy, sector analysis and company analysis to compare the current price of a stock against their own calculated intrinsic value which could possibly give them a good indication of whether a stock is undervalued or overvalued. Technical analysis assumes that the fundamental analysis has already been accounted for a company's current stock price and hence it predicts a stock's price based on its past movements. This type of investment strategy is generally used by short-term investors, where holding periods could range anywhere from seconds to weeks. Applying machine learning for stock prediction is a very popular and a profitable real-world problem. Hence, there's no surprise that many would be interested in finding a great prediction algorithm to make tons of money.",
          solution: {
            23: "Implemented user-friendly interface where users can specify stock tickers of their choice and retrieve price estimations.",
            24: "Used Quandl for retrieving stock data.",
            25: "Implemented function to compute leading and lagging technical indicators.",
            26: "Applied logarithm transformation to highly skewed features. ",
            27: "Applied normalization by taking the minimum and maximum of each feature and scaling them to 0 and 1.",
            28: "Implemented a function to choose the best model based on the r-squared score.",
            29: "Implemented a function to apply grid search technique to further optimize the best model and return the best estimator based on the r-squared scores of optimized and unoptimized models. If the best estimator is LinearSVR, then grid search wouldn't be applied.",
            30: "Implemented function to output the predictions in a CSV file."
          }, 
          lib:{
            33: "Python 2",
            34: "Numpy",
            35: "Pandas",
            35: "Scikit-Learn",
            36: "TA-Lib",
            37: "Arrow"
          },
          isValid: true,
          _link: "https://github.com/aswinramani/MLND-Capstone"
        },
        {
          id: 3, 
          name: "image-classification",
          title: "Image Classification",
          overview: "Developed a Convolutional Neural Network based dog breed classifier that accepts images from the user as input and predicts the breed.", 
          background:"Applying machine learning to image classification is a task of assigning a label to an input image from a known set of categories.  Standard algorithms which treat images as vectors are unaware of the spatial information making them inefficient in image classifications task, unlike convolutional neural networks which are built for elucidating the patterns in multi-dimensional data as they understand that the image pixels that are close in proximity to each other are more heavily related than the ones that are far apart. The goal of this project to identify dog breed from a known set of 133 dog breeds.", 
          solution: {
            38: "Transformed input images into 4D tensors because Keras CNN's require 4D array as input.",
            39: "Implemented multilayered convolutional layers each having max-pooling layers between them. Convolutional layers provide information regarding distinct features. Max-pooling layers reduce the computation cost by decreasing the parameters by taking the maximum value out of a subregion (2 by 2 filter) to determine the relative location of a specific feature to other features instead of exact location.",
            40: "Added dropout layers to reduce overfitting problem by dropping out some activation sets randomly and setting them to zero, thereby forcing the network to classify correct for new data.",
            41: "Added flatten layer to convert the array to vector. ",
            42: "Added dense layer with relu activation function to help the network to train faster by changing the negative activations to zero.",
            43: "Added a dense layer with softmax activation function to compute the probabilities for 133 dog breeds.",
            44: "Used transfer learning using ResNet-50 To reduce training time and to improve testing accuracy. ResNet-50 contains the necessary weights to detect the various dog breed which makes it easier to achieve better accuracy at predicting.",
            45: "Implemented a function to detect human faces using Haar Cascade classifiers.",
            46: "Implemented a function to display human detected, if the input image contains human or dog detected depending on the input image and outputs the predicted breed."
          },
          lib:{
            47: "Python 2",
            48: "Keras (tensorflow backend)",
            49: "OpenCV",
            50: "Numpy",
            51: "Scikit-Learn"
          },
          isValid: true,
          _link: "https://github.com/aswinramani/dog-project"
        },{
          id: 4,
          isValid: false,
          _link: "https://github.com/aswinramani?tab=repositories"
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
.project-wrapper {
  padding: 15px;
  background-color: #f7f7f7;
}
.project-content {
  padding: 20px 0px 20px 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #ced4da;
}
</style>