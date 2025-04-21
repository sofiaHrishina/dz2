import { WebDriver } from 'selenium-webdriver';
import { closeBrowserInstance, getBrowserInstance } from '../src/driver-manager';
import { AmazonWebsite } from '../src/amazon-website';
import * as assert from 'assert';

describe('Amazon tests', function() {
    this.timeout(30000);

    let driver: WebDriver;
    let amazonSite: AmazonWebsite;

    before(async function() {
        this.timeout(30000);
        driver = await getBrowserInstance();
        amazonSite = new AmazonWebsite(driver);
    });

    after(async function() {
        if (driver) {
            await closeBrowserInstance(driver);
        }
    });

    it('should search and check results', async function() {
        this.timeout(65000);
        await amazonSite.goto();
        await amazonSite.search('chair');
        const hasKeyword = await amazonSite.verifySearchResults('Chair');
        assert.strictEqual(hasKeyword, true, 'Expected search results to contain "Chair"');
    });

    it('should check product page options', async function() {
        this.timeout(20000);
        await amazonSite.goto();
        await amazonSite.search('chair');
        await amazonSite.selectRandomProduct();
        const hasOptions = await amazonSite.verifyProductOptions();
        assert.strictEqual(hasOptions, true, 'Expected product page to have options');
    });

    it('should select a sort option from the dropdown', async function() {
        this.timeout(15000);
        await amazonSite.goto();
        await amazonSite.search('chair');
        await amazonSite.selectSortOption();
    });
});
