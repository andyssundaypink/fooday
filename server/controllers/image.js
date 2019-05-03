import async from 'async';
import validator from 'validator';
import Image from '../models/image';


//retrieve a list of all recipe
exports.list = (req, res) => {
    console.log("images get list");
    
    Image.find()
        .select('_id name img category recipeId')
        .then(images => {
            res.json(images);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        })
};

//get list of images for specific recipe
exports.get = (req, res) => {
    const query = req.params.id;
    console.log(recipeId);

    Image.find({recipeId: query})
        .select('_id name img category recipeId')
        .then(images => {
            res.json(images);
        })
        .catch(err => {
            logger.error(err);
            res.status(422).send(err.errors);
        });
};

exports.post = (req, res) => {
    const data = Object.assign({}, req.body);
    const recipeId = req.params.recipe_id;
    const img = req.files.file;
    
    Image.create(img)
        .then(image => {
            image.recipeId = recipeId;
            image.category = data.category;
            image.save(function(err){
                if (!err) {
                    console.log(image);
                    console.log("updated");
                    res.json('{}');
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

exports.delete = (req, res) => {
    const imageId = req.params.image_id;

    Image.findByIdAndDelete(imageId)
        .then(image => {
            res.json();
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err.errors);
        });
}
