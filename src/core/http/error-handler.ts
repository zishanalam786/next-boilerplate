import { ApiResponse } from './response';
import { logger } from '../logger/logger';

export class ErrorHandler {
  static handle(error: unknown) {
    logger.error(error instanceof Error ? error.message : String(error));
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return ApiResponse.error(message, 500);
  }
}
