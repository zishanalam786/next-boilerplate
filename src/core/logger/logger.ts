export interface ILogger {
  info(message: string, ...meta: unknown[]): void;
  error(message: string, ...meta: unknown[]): void;
}

export class Logger implements ILogger {
  info(message: string, ...meta: unknown[]): void {
    console.log(`[INFO] ${message}`, ...meta);
  }
  error(message: string, ...meta: unknown[]): void {
    console.error(`[ERROR] ${message}`, ...meta);
  }
}

export const logger = new Logger();
//EOF