import { Page } from '@playwright/test';

export class FramerBasePage {
    public constructor(public page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.tella.com');
    }
}
