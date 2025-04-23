import { test, expect } from '@playwright/test';
import { AmazonPage } from '../src/pages/amazon-page';
import { AmazonNavElement } from '../src/elements/amazon-nav-horizontal-links';
import { AmazonCardSection } from '../src/elements/amazon-4-cards-section';
import { AmazonHamburgerMenu } from '../src/elements/amazon-hamburger-menu.element';
test.use({ storageState: './browser-context.json' });

test.describe('Amazon tests', () => {
    let amazonPage: AmazonPage;

    test.beforeEach(async ({ page }) => {
        amazonPage = new AmazonPage(page);
    });
    test('should search and check results', async () => {
        await amazonPage.goTo();
        await amazonPage.search('chair');

        const hasKeyword = await amazonPage.verifySearchResults('Chair');
        expect(hasKeyword).toBeTruthy();
    });

    test('should check product page options', async () => {
        await amazonPage.goTo();
        await amazonPage.search('chair');
        await amazonPage.selectRandomProduct();

        const hasOptions = await amazonPage.verifyProductOptions();
        expect(hasOptions).toBeTruthy();
    });

    test('should select a sort option from the dropdown', async () => {
        await amazonPage.goTo();
        await amazonPage.search('chair');
        await amazonPage.selectSortOption();
    });
    test('should click on selected specific nav link', async ({ page }) => {
        await amazonPage.goTo();
        const nav = new AmazonNavElement(page.locator('#nav-xshop'));
        const names = await nav.getLinkNames();
        console.log('Tab names:', names);

        await nav.selectLink('Prime Video');

    });

    test('should click on random nav link', async ({ page }) => {
        await amazonPage.goTo();

        const nav = new AmazonNavElement(page.locator('#nav-xshop'));

        const clickedTab = await nav.selectRandomLink();
        console.log('Clicked random tab:', clickedTab);
    });

    test('should click random valid card section and verify text', async ({ page }) => {
        await amazonPage.goTo();
        const cardsBlock = new AmazonCardSection(page);
        const validCard = await cardsBlock.selectRandomValidCard();
        const sectionText = await cardsBlock.clickRandomSectionInCard(validCard);
        await cardsBlock.verifyTextOnPage(sectionText);
    });

    test('should open hamburger menu and verify greeting', async ({ page }) => {
        await amazonPage.goTo();
        const hamburgerMenu = new AmazonHamburgerMenu(page);
        await hamburgerMenu.openMenu();
        await hamburgerMenu.verifyCustomerGreeting();
    });

});
