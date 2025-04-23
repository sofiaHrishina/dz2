import { Then, When } from '@cucumber/cucumber';
import { AmazonWorld } from '../worlds/amazon.world.ts';
import { expect } from '@playwright/test';
import { AmazonPage } from '../pages/amazon-page.ts';

let amazonPage: AmazonPage;

When('the user navigates to the Amazon homepage', async function (this: AmazonWorld) {
    amazonPage = new AmazonPage(this.page);
    await amazonPage.goTo();
});

Then('the user is able to see the Amazon logo', async function (this: AmazonWorld) {
    amazonPage = new AmazonPage(this.page);
    await expect(amazonPage.amazonLogo).toBeVisible();
});

