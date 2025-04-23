import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AmazonPage } from '../pages/amazon-page.ts';

Given('I am on the Amazon website', async function() {
    this.amazonPage = new AmazonPage(this.page);
    await this.amazonPage.goTo();
});

When('I search for {string}', async function(keyword) {
    await this.amazonPage.search(keyword);
});

Then('I should see results containing {string}', async function(keyword) {
    const hasKeyword = await this.amazonPage.verifySearchResults(keyword);
    expect(hasKeyword).toBeTruthy();
});
