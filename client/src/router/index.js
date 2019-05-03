import Vue from 'vue'
import Router from 'vue-router'
import FoodayAdvise from '@/components/FoodayAdvise'
import RecipeList from '@/components/RecipeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FoodayAdvise',
      component: FoodayAdvise
    },
    {
      path: '/recipes',
      name: 'RecipeList',
      component: RecipeList
    }
  ]
})
