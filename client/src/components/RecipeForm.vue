<template>
  <div class="recipeForm" v-if='recipes'>
      <div v-for="recipe in recipes" :key="recipe._id" v-bind:id="recipe._id">
            <a href=""><img/></a>
            <h3><a href="">{{ recipe.name }}</a></h3>
      </div>
  </div>
</template>

<script>
import {APIService} from '../APIService'
const apiService = new APIService()

export default {
  name: 'RecipeForm',
  data () {
    return {
      msg: 'Welcome to Fooday Recipe Form',
      recipes: {}

    }
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
a {
  color: #42b983;
}
</style>
