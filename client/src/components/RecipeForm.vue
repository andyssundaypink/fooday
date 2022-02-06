<template>
  <div class="recipeForm">
      <section class="form">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input name="name"
                v-model="recipe.name"
                class="input" type="text" placeholder="Enter Recipe Name"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Ingredients</label>
            <div class="control">
              <div v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.id">
                <input name="ingredient"
                  v-model="ingredient.value"
                  class="input" type="text"/>
              </div>
              <button @click="addIngredient">Add Ingredient</button>
            </div>
          </div>

          <div class="field">
            <label class="label">Procedures</label>
            <div class="control">
              <div v-for="procedure in recipe.procedures" v-bind:key="procedure.id">
                <input name="procedure"
                  v-model="procedure.value"
                  class="input" type="text"/>
              </div>
              <button @click="addProcedure">Add Procedure</button>
            </div>
          </div>

          <div class="field">
            <label class="label">Remarks</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea" v-model="recipe.remarks"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Cuisine</label>
            <div class="control">
              <input name="cuisine"
                v-model="recipe.cuisine"
                class="input" type="text"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Portion</label>
            <div class="control">
              <input name="portion"
                v-model="recipe.portion"
                class="input" type="text"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Source</label>
            <div class="control">
              <input name="source"
                v-model="recipe.source"
                class="input" type="text"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Nutritions</label>
            <div class="control">
              <label class="label">Carbohydrate</label>
              <input name="carbohydrate"
                v-model="recipe.nutritions.carbohydrate"
                class="input" type="text"/>
            </div>
            <div class="control">
              <label class="label">Fat</label>
              <input name="fat"
                v-model="recipe.nutritions.fat"
                class="input" type="text"/>
            </div>
            <div class="control">
              <label class="label">Fiber</label>
              <input name="fiber"
                v-model="recipe.nutritions.fiber"
                class="input" type="text"/>
            </div>
            <div class="control">
              <label class="label">Protein</label>
              <input name="protein"
                v-model="recipe.nutritions.protein"
                class="input" type="text"/>
            </div>
            <div class="control">
              <label class="label">Calory</label>
              <input name="calory"
                v-model="recipe.nutritions.calory"
                class="input" type="text"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Duration</label>
            <div class="control">
              <label class="label">Preparation Time</label>
              <input name="prepTime"
                v-model="recipe.duration.prepTime"
                class="input" type="text"/>
            </div>
            <div class="control">
              <label class="label">Cook Time</label>
              <input name="cookTime"
                v-model="recipe.duration.cookTime"
                class="input" type="text"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea" v-model="recipe.description"></textarea>
            </div>
          </div>

      </section>
  </div>
</template>

<script>
// import {APIService} from '../APIService'
// const apiService = new APIService()

export default {
  name: 'RecipeForm',
  data () {
    return {
      msg: 'Welcome to Fooday Recipe Form',
      recipe: {
        name: '',
        ingredients: [],
        procedures: [],
        cuisine: '',
        portion: '',
        description: '',
        duration: {
          prepTime: '',
          cookTime: ''
        },
        source: '',
        nutritions: {
          carbohydrate: '',
          fat: '',
          fiber: '',
          calory: '',
          protein: ''
        },
        remarks: ''
      },
      options: {
        cuisine: [
          {value: 'chinese', text: 'Chinese'},
          {value: 'korean', text: 'Korean'},
          {value: 'indonesian', text: 'Indonesian'},
          {value: 'european', text: 'European'},
          {value: 'american', text: 'American'},
          {value: 'russian', text: 'Russian'},
          {value: 'french', text: 'French'}
        ]
      }
    }
  },
  methods: {
    addIngredient: function () {
      this.recipe.ingredients.push({ value: '' })
    },
    addProcedure: function () {
      this.recipe.procedures.push({ value: '' })
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
input {
  height: 40px;
  display: block;
  width: 100%;
  font-family: Montserrat-SemiBold;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  padding-right: 15px;
}
.field {
  text-align: left;
}
.recipeForm {
  width: 920px;
}
textarea {
  width: 100%;
  height: 100px;
}
</style>
