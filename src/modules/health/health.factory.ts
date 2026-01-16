import { HealthController } from './health.controller';
import { HealthService } from './health.service';

export class HealthFactory {
    static create() {
        const service = new HealthService();
        return new HealthController(service);
    }
}
