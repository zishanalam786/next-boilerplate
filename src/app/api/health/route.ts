import { HealthFactory } from '@/modules/health/health.factory';

export async function GET() {
    const controller = HealthFactory.create();
    return controller.getHealth();
}
