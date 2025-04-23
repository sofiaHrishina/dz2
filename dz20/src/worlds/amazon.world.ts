import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext } from 'playwright';

export class AmazonWorld extends World {
    public static browser: Browser;
    public static globalContext: Map<string, unknown>;

    public context: BrowserContext;
    public page: Page;
    public scenarioContext: Map<string, unknown>;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map();
    }
}
