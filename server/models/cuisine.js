'use strict';

import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const CuisineSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        }
    },
    {collection: 'cuisines'}
);

CuisineSchema.plugin(timestamps);
CuisineSchema.plugin(mongooseStringQuery);

module.exports = exports = mongoose.model('Cuisine', CuisineSchema);
