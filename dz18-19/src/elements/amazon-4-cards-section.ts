import { Locator, Page, expect } from '@playwright/test';

export class AmazonCardSection {
    private allCardCandidates: Locator;

    public constructor(private page: Page) {
        this.allCardCandidates = page.locator('[id^="CardInstance"]');
    }

    private async getValidCards(): Promise<Locator[]> {
        const validCards: Locator[] = [];
        const count = await this.allCardCandidates.count();

        for (let i = 0; i < count; i++) {
            const card = this.allCardCandidates.nth(i);
            const hasQuadBlock = await card.locator('div._fluid-quad-image-label-v2_style_gridRowOne__1t0zL').count();

            if (hasQuadBlock > 0) {
                validCards.push(card);
            }
        }

        return validCards;
    }

    public async selectRandomValidCard(): Promise<Locator> {
        const validCards = await this.getValidCards();

        if (validCards.length === 0) {
            throw new Error('No cards found');
        }

        const randomIndex = Math.floor(Math.random() * validCards.length);
        return validCards[randomIndex];
    }

    public async clickRandomSectionInCard(cardLocator: Locator): Promise<string> {
        const links = cardLocator.locator('a.a-link-normal span.truncate-2line');
        const count = await links.count();
        if (count === 0) {
            throw new Error('No section spans found');
        }

        const randomIndex = Math.floor(Math.random() * count);
        const chosenSpan = links.nth(randomIndex);
        const parentLink = chosenSpan.locator('..');

        const text = (await chosenSpan.textContent())?.trim();
        if (!text) throw new Error('text not found');

        await Promise.all([
            this.page.waitForLoadState('domcontentloaded'),
            parentLink.click()
        ]);

        return text;
    }

    public async verifyTextOnPage(text: string): Promise<void> {
        await this.page.waitForSelector('[data-component-type="s-search-results"]', { timeout: 10000 });
        const found = await this.page.locator(`text=${text}`).first().isVisible();
        expect(found).toBeTruthy();
    }
}
