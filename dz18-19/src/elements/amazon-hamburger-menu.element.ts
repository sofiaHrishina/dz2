import { Page, expect } from '@playwright/test';

export class AmazonHamburgerMenu {
    public constructor(private page: Page) {}

    public async openMenu(): Promise<void> {
        const menuButton = this.page.locator('#nav-hamburger-menu');
        await expect(menuButton).toBeVisible();
        await menuButton.click();
    }

    public async verifyCustomerGreeting(): Promise<void> {
        await this.page.waitForSelector('#hmenu-customer-profile-right', { timeout: 10000 });
        const greeting = this.page.locator('#hmenu-customer-name b').first();
        const text = (await greeting.textContent())?.trim();
        expect(text?.startsWith('Hello,')).toBeTruthy();
    }

}
