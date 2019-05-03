import Recipe from '../controllers/recipe';
import Image from '../controllers/image';
import Cuisine from '../controllers/cuisine';

module.exports = api => {
    api.route('/advise').get(Recipe.getAdvise);
    api.route('/recipes').get(Recipe.list);
    api.route('/recipes/:recipe_id').get(Recipe.get);
    api.route('/recipes').post(Recipe.post);
    api.route('/recipes/:recipe_id').put(Recipe.put);
    api.route('/recipes/:recipe_id').delete(Recipe.delete);
    api.route('/images').get(Image.list);
    api.route('/recipes/:recipe_id/images').get(Image.get);
    api.route('/recipes/:recipe_id/images').post(Image.post);
    api.route('/cuisines').get(Cuisine.list);
    api.route('/cuisines/:cuisine_id').get(Cuisine.get);
    api.route('/cuisines').post(Cuisine.post);
    api.route('/cuisines/:cuisine_id').put(Cuisine.put);
    api.route('/cuisines/:cuisine_id').delete(Cuisine.delete);
};