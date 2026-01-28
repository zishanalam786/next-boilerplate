export class EnvService {
    static get(key: string, defaultValue: string = ''): string {
        return process.env[key] || defaultValue;
    }
}
