'use strict';

import 'dotenv/config.js';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { response } from './helpers/index.js';
import { RouteNotFoundError } from './constants/errors.js';
import routes from './modules/routes.module.js';

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.get('/', (req, res) => {
  response.successResponse(res, 'Hello World');
});

app.use('/api', routes);

app.all('*', (req, res, next) => {
  throw new RouteNotFoundError();
});

app.use(response.errorResponse);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
