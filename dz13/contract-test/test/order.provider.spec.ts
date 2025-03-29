import { Verifier } from '@pact-foundation/pact';

describe('Order Provider Verification', () => {
    it('verifies contract from OrderConsumer', () => {
        return new Verifier({
            // providerBaseUrl: 'https://petstore.swagger.io/v2',
            providerBaseUrl: 'http://localhost:8080',
            pactUrls: ['C:/Users/sofka/alldz/dz13/contract-test/pacts/orderconsumer-orderprovider.json']
        }).verifyProvider();
    });
});
