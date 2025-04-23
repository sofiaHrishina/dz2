/* import { test } from '@playwright/test';
import { AmazonLoginPage } from '../../src/pages/amazon-login.page';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.AMAZON_EMAIL || !process.env.AMAZON_PASSWORD) {
    console.error('AMAZON_EMAIL AMAZON_PASSWORD not found');
    process.exit(1);
}
if (!fs.existsSync('./browser-context.json')) {
    fs.writeFileSync('./browser-context.json', JSON.stringify({
        cookies: [],
        origins: []
    }, null, 2));
}
test.describe('Amazon login', () => {
    test('login', async ({ page, context }) => {
        const amazonLoginPage = new AmazonLoginPage(page, context);
        await amazonLoginPage.login(
            process.env.AMAZON_EMAIL as string,
            process.env.AMAZON_PASSWORD as string
        );
    });
});
 */
