'use strict';

import mongoose, { Schema, mongo } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const ImageSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
            trim: true
        },
        data: Buffer, 
        mimeType: String,
        size: Number,
        encoding: String,
        md5: String,
        category: {
            type: String,
            required: false
        },
        recipeId: {
            type: Schema.Types.ObjectId, 
            ref: 'Recipe',
        }
    },
    {collection: 'images'}
);

ImageSchema.plugin(timestamps);
ImageSchema.plugin(mongooseStringQuery);

module.exports = exports = mongoose.model('Image', ImageSchema)
