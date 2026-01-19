import { HealthService } from '@/modules/health/health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(() => {
    service = new HealthService();
  });

  it('should return status UP', () => {
    const result = service.check();
    expect(result.status).toBe('UP');
  });

  it('should return a valid timestamp', () => {
    const result = service.check();
    expect(result.timestamp).toBeDefined();
    expect(new Date(result.timestamp).getTime()).not.toBeNaN();
  });
});
