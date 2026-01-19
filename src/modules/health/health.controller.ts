import { IHealthService } from './health.types';
import { ApiResponse } from '@/core/http/response';

export class HealthController {
    constructor(private healthService: IHealthService) {}

    getHealth() {
        const result = this.healthService.check();
        return ApiResponse.success(result);
    }
}
