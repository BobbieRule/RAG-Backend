'use strict';

export class RouteNotFoundError extends Error {
  constructor() {
    super();

    this.statusCode = 404;
    this.error = 'RouteNotFoundError';
    this.message = 'Route does not exist';
  }
}
