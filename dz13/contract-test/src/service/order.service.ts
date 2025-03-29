import axios, { AxiosPromise } from 'axios';
import { OrderDto } from '../model/order.dto';

export class OrderService {
    public constructor(private url: string) {}

    public createOrder(order: OrderDto): AxiosPromise<OrderDto> {
        return axios.request({
            baseURL: this.url,
            method: 'POST',
            url: '/v2/store/order',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: order
        });
    }

    public getOrder(id: number): AxiosPromise<OrderDto> {
        return axios.request({
            baseURL: this.url,
            method: 'GET',
            url: `/v2/store/order/${id}`,
            headers: {
                Accept: 'application/json'
            }
        });
    }
}
