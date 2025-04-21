import { Locator } from '@playwright/test';

export class FramerTabElement {
    private readonly page: Page;
    private readonly baseLocator: Locator;

    private get tabItem(): Locator {
        return this.baseLocator.locator('[data-highlight="true"]');
    }

    private get tabText(): Locator {
        return this.baseLocator.locator('.framer-text');
    }

    public constructor(page: Page, baseLocator: Locator) {
        this.page = page;
        this.baseLocator = baseLocator;
    }

    public async getTabNames(): Promise<string[]> {
        const tabNames: string[] = [];
        const tabs = await this.tabText.all();

        for (const tab of tabs) {
            const text = await tab.textContent();
            if (text) {
                tabNames.push(text.trim());
            }
        }

        return tabNames;
    }

    public async selectTab(tabName: string): Promise<void> {
        console.log(`[selectTab] Trying to select tab: "${tabName}"`);

        const tabToClick = this.baseLocator
            .locator('div[tabindex="0"]') // каждый таб — это div с tabindex
            .filter({
                has: this.page.locator('.framer-text', { hasText: tabName })
            })
            .first();

        console.log(`[selectTab] Clicking on tab: "${tabName}"`);
        await tabToClick.scrollIntoViewIfNeeded();
        await tabToClick.click();

        console.log(`[selectTab] Waiting for tab "${tabName}" to become selected...`);

        let attempts = 0;
        let selected = false;

        while (attempts < 5) {
            const selectedTabs = await this.baseLocator
                .locator('div[data-framer-name="Selected"] div.framer-text')
                .allTextContents();

            const normalized = selectedTabs.map(t => t.trim());

            if (normalized.includes(tabName)) {
                console.log(`[selectTab] Tab "${tabName}" is now selected (after ${attempts + 1} attempts)`);
                selected = true;
                break;
            }

            attempts++;
            console.log(`[selectTab] Attempt ${attempts}: tab not selected yet`);
            await new Promise(r => setTimeout(r, 1000));
        }

        if (!selected) {
            const selectedTexts = await this.baseLocator
                .locator('div[data-framer-name="Selected"] .framer-text')
                .allTextContents();

            console.log(`[selectTab] Texts found in selected tabs: ${selectedTexts.join(', ')}`);
            const html = await this.baseLocator.innerHTML();
            console.log(`[selectTab] DOM snapshot:\n${html}`);

            throw new Error(`Tab "${tabName}" was clicked, but never became selected.`);
        }
    }


    public async getActiveTab(): Promise<string> {
        const selectedTab = this.baseLocator.locator('div[data-framer-name="Selected"]');
        const textElement = selectedTab.locator('.framer-text');
        const text = await textElement.textContent();
        return text ? text.trim() : '';
    }
}
