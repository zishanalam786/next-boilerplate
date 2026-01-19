export interface IHealthService {
    check(): { status: string; timestamp: string };
}
