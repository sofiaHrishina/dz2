import { Given } from '@cucumber/cucumber';
import { AmazonLoginPage } from '../pages/amazon-login.page.ts';
import { AmazonWorld } from '../worlds/amazon.world.ts';

Given('the user is authenticated on Amazon', async function (this: AmazonWorld) {
    const amazonLoginPage = new AmazonLoginPage(this.page, this.context);

    if (!process.env.AMAZON_EMAIL || !process.env.AMAZON_PASSWORD) {
        throw new Error('AMAZON_EMAIL or AMAZON_PASSWORD is missing');
    }

    await amazonLoginPage.login(
        process.env.AMAZON_EMAIL as string,
        process.env.AMAZON_PASSWORD as string
    );
});
