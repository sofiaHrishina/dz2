import { Locator } from '@playwright/test';

export class AmazonNavElement {
    private get allTabs(): Locator {
        return this.baseLocator.locator('ul.nav-ul li.nav-li a.nav-a');
    }

    public constructor(private baseLocator: Locator) {}

    public async getLinkNames(): Promise<string[]> {
        const tabNames: string[] = [];

        const tabs = await this.allTabs.all();
        for (const tab of tabs) {
            const text = await tab.textContent();
            tabNames.push(text?.trim() ?? '');
        }

        return tabNames;
    }

    public async selectLink(tabName: string): Promise<void> {
        const tabNames = await this.getLinkNames();
        if (!tabNames.includes(tabName)) {
            throw new Error(`Tab "${tabName}" not found`);
        }

        const tabs = await this.allTabs.all();
        await tabs[tabNames.indexOf(tabName)].click();
    }

    public async selectRandomLink(): Promise<string> {
        const tabs = await this.allTabs.all();
        if (tabs.length === 0) {
            throw new Error('No tabs found');
        }

        const randomIndex = Math.floor(Math.random() * tabs.length);
        const randomTab = tabs[randomIndex];
        const tabText = (await randomTab.textContent())?.trim() ?? 'Unknown';

        await randomTab.click();
        return tabText;
    }

}
