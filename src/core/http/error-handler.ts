import { ApiResponse } from './response';
import { logger } from '../logger/logger';

export class ErrorHandler {
  static handle(error: any) {
    logger.error(error);
    return ApiResponse.error(error.message || 'Internal Server Error', 500);
  }
}
