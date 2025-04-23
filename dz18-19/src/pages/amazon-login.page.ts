import { BrowserContext, Locator, Page } from '@playwright/test';
import * as fs from 'fs';

export class AmazonLoginPage {
    private get navLinkAccountList(): Locator {
        return this.page.locator('#nav-link-accountList');
    }

    private get emailInput(): Locator {
        return this.page.locator('#ap_email_login');
    }

    private get continueButton(): Locator {
        return this.page.locator('#continue > span > input');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#ap_password');
    }

    private get signInSubmitButton(): Locator {
        return this.page.locator('#signInSubmit');
    }

    private get claimCollectionContainer(): Locator {
        return this.page.locator('#claim-collection-container');
    }

    private get authPortalSection(): Locator {
        return this.page.locator('#authportal-main-section > div:nth-child(2) > div');
    }

    public get amazonLogo(): Locator {
        return this.page.locator('#nav-logo-sprites');
    }

    public constructor(private page: Page, private context: BrowserContext) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://www.amazon.com/');
        await this.navLinkAccountList.waitFor();
    }

    public async login(email: string, password: string): Promise<void> {
        await this.goto();

        await this.navLinkAccountList.click();
        await this.claimCollectionContainer.waitFor();

        await this.emailInput.click();
        await this.emailInput.fill(email);

        await this.continueButton.click();
        await this.authPortalSection.waitFor();

        await this.passwordInput.click();
        await this.passwordInput.fill(password);

        await this.signInSubmitButton.click();
        await this.amazonLogo.waitFor();

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }
}
