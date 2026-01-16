export interface ILogger {
  info(message: string, ...meta: any[]): void;
  error(message: string, ...meta: any[]): void;
}

export class Logger implements ILogger {
  info(message: string, ...meta: any[]): void {
    console.log(`[INFO] ${message}`, ...meta);
  }
  error(message: string, ...meta: any[]): void {
    console.error(`[ERROR] ${message}`, ...meta);
  }
}

export const logger = new Logger();
