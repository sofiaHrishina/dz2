import { test, expect } from '@playwright/test';
import { AmazonPage } from '../src/pages/amazon-page';

test.use({ storageState: './browser-context.json' });

test.describe('Amazon tests', () => {
    let amazonPage: AmazonPage;

    test.beforeEach(async ({ page }) => {
        amazonPage = new AmazonPage(page);
    });

    test('should search and check results', async () => {
        await amazonPage.goTo();
        await amazonPage.search('chair');

        const hasKeyword = await amazonPage.verifySearchResults('Chair');
        expect(hasKeyword).toBeTruthy();
    });

    test('should check product page options', async () => {
        await amazonPage.goTo();
        await amazonPage.search('chair');
        await amazonPage.selectRandomProduct();

        const hasOptions = await amazonPage.verifyProductOptions();
        expect(hasOptions).toBeTruthy();
    });

    test('should select a sort option from the dropdown', async () => {
        await amazonPage.goTo();
        await amazonPage.search('chair');
        await amazonPage.selectSortOption();
    });
});
