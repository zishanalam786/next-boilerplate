import { IHealthService } from './health.types';

export class HealthService implements IHealthService {
    check() {
        return { status: 'UP', timestamp: new Date().toISOString() };
    }
}
