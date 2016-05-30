import {OpaqueToken} from 'angular2/core';

export interface LoggerService {
  logs: string[],
  log(message: string);
}

export let LOGGER_SERVICE = new OpaqueToken('app.logger.service');
