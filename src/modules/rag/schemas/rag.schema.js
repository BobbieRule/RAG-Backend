'use strict';

import joi from 'joi';

export const ragGenerateResponseSchema = joi.object({
  document: joi.string().required(),
  query: joi.string().required(),
});
