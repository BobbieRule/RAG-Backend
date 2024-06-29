'use strict';

import {
  validator,
  document,
  response,
  openai,
} from '../../../../../helpers/index.js';
import { ragGenerateResponseSchema } from '../../../schemas/rag.schema.js';

const { successResponse } = response;
const { validateSchema } = validator;
const { retrieveDocuments } = document;
const { generateResponse } = openai;

export const getAllDocuments = async (req, res, next) => {
  try {
    const documents = retrieveDocuments();

    successResponse(res, 'listing', documents);
  } catch (err) {
    next(err);
  }
};

export const generateQueryResponse = async (req, res, next) => {
  try {
    validateSchema(ragGenerateResponseSchema, req.body);

    const { document, query } = req.body;

    const response = await generateResponse(document, query);

    successResponse(res, 'responseGenerated', { response });
  } catch (err) {
    next(err);
  }
};
