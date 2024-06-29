'use strict';

import express from 'express';

import ragRouter from './rag.route.js';

const router = express.Router();

router.use(`/rag`, ragRouter);

export default router;
