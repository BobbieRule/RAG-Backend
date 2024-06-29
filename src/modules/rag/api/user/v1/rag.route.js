'use strict';

import express from 'express';
import * as ragController from './rag.controller.js';

const router = express.Router();

router.get('/retrieve-documents', ragController.getAllDocuments);
router.post('/generate-response', ragController.generateQueryResponse);

export default router;
