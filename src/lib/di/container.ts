export class Container {
  private static services = new Map<string, unknown>();

  static register<T>(key: string, instance: T): void {
    this.services.set(key, instance);
  }

  static resolve<T>(key: string): T {
    if (!this.services.has(key)) {
      throw new Error(`Service ${key} not found`);
    }
    return this.services.get(key) as T;
  }
}
//EOF