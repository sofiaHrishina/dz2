import { browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import { AmazonWebsite } from '../amazon-website';

describe('Amazon tests', () => {
    let amazonSite: AmazonWebsite;

    before(async () => {
        await browser.maximizeWindow();
        amazonSite = new AmazonWebsite();
    });

    it('should search and check results', async () => {
        await amazonSite.goto();
        await browser.pause(20000);
        await amazonSite.search('chair');
        const hasKeyword = await amazonSite.verifySearchResults('Chair');
        expect(hasKeyword).toBe(true);
    });

    it('should check product page options', async () => {
        await amazonSite.goto();
        await amazonSite.search('chair');
        await amazonSite.selectRandomProduct();
        const hasOptions = await amazonSite.verifyProductOptions();
        expect(hasOptions).toBe(true);
    });

    it('should select a sort option from the dropdown', async () => {
        await amazonSite.goto();
        await amazonSite.search('chair');
        await amazonSite.selectSortOption();
    });
});
