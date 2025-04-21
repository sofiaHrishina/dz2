import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class AmazonWebsite {
    private baseUrl = 'https://www.amazon.com/';

    private get searchInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('div.nav-search-field > input#twotabsearchtextbox');
    }

    private get searchButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('input#nav-search-submit-button');
    }

    private get searchResults(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('[data-component-type="s-search-results"]');
    }

    private get productTitles() {
        return $$('div[data-cy="title-recipe"] span:not(.a-size-base):not(.a-color-base)');
    }

    private get productDetailsButtons() {
        return $$('div[data-csa-c-content-id="s-search-see-details-button"] span.a-button.a-button-base[id^="a-autoid-"]');
    }

    private get productDetailsPage(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('div#ppd');
    }

    private get colorOptionsList() {
        return $$('ul.dimension-values-list[role="radiogroup"] li');
    }

    private get sortDropdown(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('span.a-dropdown-container');
    }

    private get sortByPriceOption(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('a#s-result-sort-select_1');
    }

    public async goto(): Promise<void> {
        await browser.url(this.baseUrl);
    }

    public async search(keyword: string): Promise<void> {
        await this.searchInput.waitForClickable();
        await this.searchInput.click();
        await this.searchInput.setValue(keyword);
        await this.searchButton.click();
        await this.searchResults.waitForExist();
    }

    public async verifySearchResults(keyword: string): Promise<boolean> {
        await this.searchResults.waitForExist();
        const titles = await this.productTitles;

        for (const title of titles) {
            const text = await title.getText();
            if (text.toLowerCase().includes(keyword.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    public async selectRandomProduct(): Promise<void> {
        const buttons = await this.productDetailsButtons;
        const randomIndex = Math.floor(Math.random() * buttons.length);
        await buttons[randomIndex].click();
        await this.productDetailsPage.waitForExist();
    }

    public async verifyProductOptions(): Promise<boolean> {
        const options = await this.colorOptionsList;
        return options.length > 0;
    }

    public async selectSortOption(): Promise<void> {
        await this.sortDropdown.waitForClickable();
        await this.sortDropdown.click();
        await this.sortByPriceOption.waitForDisplayed();
        await this.sortByPriceOption.click();
    }
}
