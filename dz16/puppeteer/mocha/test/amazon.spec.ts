import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Puppeteer Amazon tests', function() {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    this.timeout(30000);

    before(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: { width: 1200, height: 800 }
        });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
        await page.setDefaultNavigationTimeout(20000);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should search for "chair" and check results', async () => {
        await page.goto('https://www.amazon.com', { waitUntil: 'networkidle2' });

        await page.waitForSelector('#twotabsearchtextbox', { visible: true });
        await page.type('#twotabsearchtextbox', 'chair');
        await page.click('#nav-search-submit-button');

        await page.waitForSelector('[data-component-type="s-search-result"] h2', { timeout: 30000 });

        const pageUrl = page.url();
        if (pageUrl.includes('sorry') || pageUrl.includes('captcha')) {
            throw new Error('Blocked by Amazon CAPTCHA page');
        }

        const productTitles = await page.$$eval('[data-component-type="s-search-result"] h2', elements =>
            elements.map(el => el.textContent?.toLowerCase().trim() || '')
        );

        if (!productTitles.length) {
            throw new Error('No product titles were found.');
        }

        const containsChair = productTitles.some(text => text.includes('chair'));
        expect(containsChair).to.be.true;
    });

    it('Checks product page options', async () => {
        await page.goto('https://www.amazon.com/s?k=chair', { waitUntil: 'networkidle2' });

        await page.waitForSelector('span.a-button.a-button-base[id^="a-autoid-"]', { timeout: 15000 });

        const buttons = await page.$$('span.a-button.a-button-base[id^="a-autoid-"]');
        expect(buttons.length).to.be.greaterThan(0);

        const randomIndex = Math.floor(Math.random() * buttons.length);
        await buttons[randomIndex].click();

        await page.waitForSelector('div#ppd', { timeout: 10000 });

        const options = await page.$$('ul.dimension-values-list[role="radiogroup"] li');

        const visibleOptions = [];
        for (const option of options) {
            const hasButton = await option.$('span.a-button-inner');
            if (hasButton) visibleOptions.push(option);
        }

        expect(visibleOptions.length).to.be.greaterThan(0);
    });


    it('should select a sort option from the dropdown', async () => {
        await page.goto('https://www.amazon.com/s?k=chair', { waitUntil: 'networkidle2' });

        await page.waitForSelector('.s-result-item', { timeout: 15000 });

        const sortDropdownSelector = '#a-autoid-0-announce, .a-dropdown-container';
        await page.waitForSelector(sortDropdownSelector, { timeout: 5000 });
        const sortDropdown = await page.$(sortDropdownSelector);
        expect(sortDropdown).to.not.be.null, 'Sort dropdown not found';

        if (sortDropdown) {
            await sortDropdown.click();
        } else {
            throw new Error('Sort dropdown element is null');
        }

        await page.waitForSelector('.a-dropdown-link', { visible: true, timeout: 5000 });

        const priceOptionSelector = 'a[data-value*="price-asc"], a.a-dropdown-link:nth-child(2)';
        const priceOption = await page.$(priceOptionSelector);
        expect(priceOption).to.not.be.null, 'Price sorting option not found';

        if (priceOption) {
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle2' }),
                priceOption.click()
            ]);
        } else {
            throw new Error('Price option element is null');
        }

        const url = page.url();
        expect(url).to.include('s=');
    });
});
