import { expect } from 'chai';
import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { OrderDto } from '../src/model/order.dto';
import { OrderService } from '../src/service/order.service';

const { like } = MatchersV3;

describe('PactV3 Order consumer contract', () => {
    let orderService: OrderService;

    const provider = new PactV3({
        consumer: 'OrderConsumer',
        provider: 'OrderProvider'
    });

    const testOrder = new OrderDto(
        3,
        5678,
        3,
        '2025-03-30T12:00:00.000Z',
        'placed',
        true
    );

    const expectedBody = like(testOrder);

    it('create and fetch order by ID', () => {
        provider
            .given('Order with ID 3 exists')
            .uponReceiving('POST a new order')
            .withRequest({
                method: 'POST',
                path: '/v2/store/order',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: testOrder
            })
            .willRespondWith({
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: expectedBody
            })
            .uponReceiving('GET order by ID')
            .withRequest({
                method: 'GET',
                path: '/v2/store/order/3',
                headers: {
                    Accept: 'application/json'
                }
            })
            .willRespondWith({
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: expectedBody
            });

        return provider.executeTest(async (mockServer) => {
            orderService = new OrderService(mockServer.url);

            const createRes = await orderService.createOrder(testOrder);
            expect(createRes.status).to.eq(200);
            expect(createRes.data).to.deep.equal(testOrder);

            const getRes = await orderService.getOrder(3);
            expect(getRes.status).to.eq(200);
            expect(getRes.data).to.deep.equal(testOrder);
        });
    });
});
