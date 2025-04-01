export interface IApiService {
    get(url: string, params?: Record<string, any>): Promise<any>;
    post(url: string, body?: any, params?: Record<string, any>): Promise<any>;
}
