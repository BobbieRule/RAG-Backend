'use strict';

import successMessages from '../constants/success-messages.js';

export const successResponse = (res, message, data) => {
  return res.status(200).json({
    status: true,
    message: successMessages[message] || message,
    data: data || null,
  });
};

export const errorResponse = (err, req, res, next) => {
  return res.status(err.statusCode || 400).json({
    status: false,
    message: err.message,
    data: err.data || null,
  });
};
