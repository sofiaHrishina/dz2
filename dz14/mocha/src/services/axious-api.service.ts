import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IApiService } from './interfaces/i-api.service';

export class AxiosApiService implements IApiService {
    private axiosInstance: AxiosInstance;

    public constructor(baseUrl: string, headers?: Record<string, string>) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
    }

    public async get(url: string, params?: Record<string, any>): Promise<AxiosResponse> {
        try {
            const response = await this.axiosInstance.get(url, { params });
            return response;
        } catch (error) {
            console.error(`Error during GET request to ${url}:`, error);
            throw error;
        }
    }

    public async post(url: string, body?: any, params?: Record<string, any>): Promise<AxiosResponse> {
        try {
            const response = await this.axiosInstance.post(url, body, { params });
            return response;
        } catch (error) {
            console.error(`Error during POST request to ${url}:`, error);
            throw error;
        }
    }

}
