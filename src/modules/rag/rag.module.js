'use strict';

import express from 'express';

import apiRouter from './api/index.js';

const router = express.Router();

router.use(apiRouter);

export default router;
