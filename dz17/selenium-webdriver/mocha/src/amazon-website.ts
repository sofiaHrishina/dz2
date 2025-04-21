import { By, until, WebDriver, WebElementPromise } from 'selenium-webdriver';

export class AmazonWebsite {
    private baseUrl = 'https://www.amazon.com/';

    private get searchInput(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.css('div.nav-search-field > input#twotabsearchtextbox')), 10000);
    }

    private get searchButton(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.css('input#nav-search-submit-button')), 10000);
    }

    private get searchResults(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.css('[data-component-type="s-search-results"]')), 10000);
    }

    private get productTitles(): Promise<any> {
        return this.driver.findElements(By.css('div[data-cy="title-recipe"] span:not(.a-size-base):not(.a-color-base)'));
    }

    private get productDetailsButtons(): Promise<any> {
        return this.driver.findElements(By.css('div[data-csa-c-content-id="s-search-see-details-button"] span.a-button.a-button-base[id^="a-autoid-"]'));
    }

    private get productDetailsPage(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.css('div#ppd')), 10000);
    }

    private get colorOptionsList(): Promise<any> {
        return this.driver.findElements(By.css('ul.dimension-values-list[role="radiogroup"] li'));
    }

    private get sortDropdown(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.css('span.a-dropdown-container')), 10000);
    }

    private get sortByPriceOption(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.css('a#s-result-sort-select_1')), 10000);
    }

    public constructor(private driver: WebDriver) {}

    public async goto(): Promise<void> {
        await this.driver.get(this.baseUrl);
    }

    public async search(keyword: string): Promise<void> {
        const searchBox = await this.searchInput;
        await searchBox.click();
        await searchBox.sendKeys(keyword);

        const searchBtn = await this.searchButton;
        await searchBtn.click();

        await this.searchResults;
    }

    public async verifySearchResults(keyword: string): Promise<boolean> {
        await this.driver.wait(until.elementLocated(By.css('[data-component-type="s-search-results"]')), 10000);

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

        await this.productDetailsPage;
    }

    public async verifyProductOptions(): Promise<boolean> {
        const options = await this.colorOptionsList;
        return options.length > 0;
    }

    public async selectSortOption(): Promise<void> {
        const dropdown = await this.sortDropdown;
        await dropdown.click();

        const priceOption = await this.sortByPriceOption;
        await this.driver.wait(until.elementIsVisible(priceOption), 10000);
        await priceOption.click();
    }
}
