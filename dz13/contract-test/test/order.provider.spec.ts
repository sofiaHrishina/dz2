import path from 'path';
import fs from 'fs';
import { Verifier } from '@pact-foundation/pact';

describe('Order Provider Verification', () => {
    const pactFile = path.resolve(process.cwd(), './pacts/OrderConsumer-OrderProvider.json');

    it('verifies contract from OrderConsumer', function () {
        if (!fs.existsSync(pactFile)) {
            this.skip();
        }

        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io/',
            pactUrls: [pactFile]
        }).verifyProvider();
    });
});
