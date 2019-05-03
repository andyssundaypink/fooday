import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import logger from 'morgan';


const api = express();
api.use(fileUpload());
api.use(logger('dev'));

mongoose.connect('mongodb://localhost:27017/fooday', { useNewUrlParser: true });

api.use(cors());
// api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.listen(config.server.port, err => {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
		require('./routes/' + file)(api);
	});

	console.log(`API is now running on port ${config.server.port} in ${config.env} mode`);
});

module.exports = api;