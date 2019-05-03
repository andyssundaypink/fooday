import async from 'async';
import validator from 'validator';
import Cuisine from '../models/cuisine';


exports.list = (req, res) => {
    console.log("exports.list");
    // const query = req.query || {};
    
    Cuisine.find()
        .select('_id name')
        .then(cuisines => {
            res.json(cuisines);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        })
};

//get specific Cuisine
exports.get = (req, res) => {
    const cuisineId = req.params.cuisine_id;
    console.log(cuisineId);

    Cuisine.findById(cuisineId)
        .then(cuisine => {
            console.log(cuisine);
            res.json(cuisine);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        });
};

exports.post = (req, res) => {
    const data = Object.assign({}, req.body);
    Cuisine.create(data)
        .then(cuisine => {
            res.json(cuisine);
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err.errors);
        });
}

exports.put = (req, res) => {
    const cuisineId = req.params.cuisine_id;
    const data = Object.assign({}, req.body);

    Cuisine.findByIdAndUpdate(cuisineId, data)
        .select('_id name')
        .then(cuisine => {
            console.log(cuisine);
            res.json(cuisine);
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err.errors);
        });
}

exports.delete = (req, res) => {
    const cuisineId = req.params.cuisine_id;

    Cuisine.findByIdAndDelete(cuisineId)
        .then(() => {
            res.json();
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err.errors);
        });

}
