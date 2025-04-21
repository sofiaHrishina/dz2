import { Locator, Page } from '@playwright/test';
import { FramerTabElement } from '../elements/tella-tabs.element';
import { ContentItemElement } from '../elements/content-item.element';
import { FramerBasePage } from './tella-base.page';
import { ContentItemModel } from '../models/content-item.pm';

export class FramerContentPage extends FramerBasePage {
    public tabsElement: FramerTabElement;

    private get videoContainers(): Locator {
        return this.page.locator('.framer-brpp2l'); // Контейнер з відео
    }

    public constructor(page: Page) {
        super(page);
        this.tabs = new FramerTabElement(this.page, this.page.locator('.framer-bbgxfc').first());
    }

    public async getContentItems(): Promise<ContentItemModel[]> {
        const items = await this.videoContainers.all();
        const contentDetails: ContentItemModel[] = [];

        for (const item of items) {
            const itemElement = new ContentItemElement(item);
            const details = await itemElement.getItemDetails();
            contentDetails.push(details);
        }

        return contentDetails;
    }

    public async getTabNames(): Promise<string[]> {
        return this.tabsElement.getTabNames();
    }

    public async selectTab(tabName: string): Promise<void> {
        await this.tabsElement.selectTab(tabName);
    }

    public async getActiveTab(): Promise<string> {
        return this.tabsElement.getActiveTab();
    }
}
