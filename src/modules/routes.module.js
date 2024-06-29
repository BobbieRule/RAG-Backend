'use strict';

import express from 'express';

import ragModule from './rag/rag.module.js';

const router = express.Router();

router.use(ragModule);

export default router;
