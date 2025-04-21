import { Locator } from '@playwright/test';
import { ContentItemModel } from '../models/content-item.pm';

export class ContentItemElement {
    public constructor(private baseLocator: Locator) {}

    public async getItemDetails(): Promise<ContentItemModel> {
        const videoLocator = this.baseLocator.locator('video');
        const videoSrc = await videoLocator.getAttribute('src') || '';
        const id = await this.baseLocator.getAttribute('data-framer-name') || videoSrc;

        return {
            id,
            videoSrc
        };
    }
}
