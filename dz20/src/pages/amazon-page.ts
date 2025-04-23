import { Locator, Page } from '@playwright/test';

export class AmazonPage {
    public get amazonLogo(): Locator {
        return this.page.locator('#nav-logo-sprites');
    }

    public get userAccountNav(): Locator {
        return this.page.locator('#nav-link-accountList');
    }
    private get searchInput(): Locator {
        return this.page.locator('div.nav-search-field > input#twotabsearchtextbox');
    }

    private get searchButton(): Locator {
        return this.page.locator('input#nav-search-submit-button');
    }

    private get searchResults(): Locator {
        return this.page.locator('[data-component-type="s-search-results"]');
    }

    private get productTitles(): Locator {
        return this.page.locator('div[data-cy="title-recipe"] span:not(.a-size-base):not(.a-color-base)');
    }

    private get productDetailsButtons(): Locator {
        return this.page.locator('a.a-button-text[href*="/dp/"]');
    }

    private get productDetailsPage(): Locator {
        return this.page.locator('div#ppd');
    }

    private get colorOptionsList(): Locator {
        return this.page.locator('ul.dimension-values-list[role="radiogroup"] li');
    }

    private get sortDropdown(): Locator {
        return this.page.locator('span.a-dropdown-container');
    }

    private get sortByPriceOption(): Locator {
        return this.page.locator('a#s-result-sort-select_1');
    }

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.amazon.com/');
        await this.amazonLogo.waitFor();
    }
    public async search(keyword: string): Promise<void> {
        await this.searchInput.waitFor({ state: 'visible' });
        await this.searchInput.click();
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
        await this.searchResults.waitFor();
    }

    public async verifySearchResults(keyword: string): Promise<boolean> {
        await this.searchResults.waitFor();
        const titlesLocator = this.productTitles;
        await titlesLocator.first().waitFor({ state: 'visible', timeout: 10000 });

        const titles = await this.productTitles.all();

        for (const title of titles) {
            const text = await title.textContent() || '';
            if (text.toLowerCase().includes(keyword.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    public async selectRandomProduct(): Promise<void> {
        const buttons = await this.productDetailsButtons.all();
        const randomIndex = Math.floor(Math.random() * buttons.length);
        await buttons[randomIndex].click();
        await this.productDetailsPage.waitFor();
    }

    public async verifyProductOptions(): Promise<boolean> {
        const options = await this.colorOptionsList.all();
        return options.length > 0;
    }

    public async selectSortOption(): Promise<void> {
        await this.sortDropdown.waitFor({ state: 'visible' });
        await this.sortDropdown.click();
        await this.sortByPriceOption.waitFor({ state: 'visible' });
        await this.sortByPriceOption.click();
        await this.page.waitForTimeout(1000);
    }
}
