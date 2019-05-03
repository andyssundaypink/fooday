import async from 'async';
import validator from 'validator';
import Recipe from '../models/recipe';
import logger from 'morgan';


//retrieve a list of all recipe
exports.list = (req, res) => {
    console.log("exports.list");
    // const query = req.query || {};
    
    Recipe.find()
        .select('_id name description ingredients procedures image')
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        })
};

//get specific recipe
exports.get = (req, res) => {
    const recipeId = req.params.recipe_id;
    console.log(recipeId);

    Recipe.findById(recipeId)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        });
};

exports.getAdvise = (req, res) => {
    Recipe.aggregate().sample(1)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        })
}

exports.post = (req, res) => {
    const data = Object.assign({}, req.body);
    console.log(data);

    Recipe.create(data)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err.errors);
        });
}

exports.put = (req, res) => {
    const data = Object.assign({}, req.body);
    const recipeId = req.params.recipe_id;

    Recipe.findByIdAndUpdate(recipeId, data)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err.errors);
        });
}

exports.delete = (req, res) => {
    const recipeId = req.params.recipe_id;

    Recipe.findByIdAndDelete(recipeId)
        .then(cuisine => {
            console.log('recipe is deleted');
            Image.deleteMany({recipeId: recipeId}, function(err){
                if(!err){
                    console.log('images are deleted');
                } else {
                    console.log(err);
                }
            });
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err.errors);
        });
}