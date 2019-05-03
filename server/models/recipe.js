'use strict';

import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const RecipeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        portion: {
            type: Number,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        duration: {
            prepTime: {
                type: Number,
                required: false
            },
            cookTime: {
                type: Number, 
                required: false
            }
        },
        cuisine: {
            type: String,
            required: false,
            trim: true
        },
        source: {
            type: String,
            required: false,
            trim: true
        },
        images: [{
            type: Schema.Types.ObjectId, 
            ref: 'Image',
            required: false
        }],
        ingredients: [{
            label: {
                type: String,
                required: true
            },
            content: [String]
        }],
        procedures: [{
            label: {
                type: String,
                required: true
            },
            content: [String]
        }],
        nutritions: {
            protein: {
                type: String, 
                required: false
            },
            calory: {
                type: String, 
                required: false
            },
            carbohydrate: {
                type: String, 
                required: false
            },
            fat: {
                type: String, 
                required: false
            },
            fiber: {
                type: String, 
                required: false
            }
        },
        remarks: {
            type: String, 
            required: false
        }
    },
    {collection: 'recipes'}
);


RecipeSchema.plugin(timestamps);
RecipeSchema.plugin(mongooseStringQuery);

module.exports = exports = mongoose.model('Recipe', RecipeSchema);
