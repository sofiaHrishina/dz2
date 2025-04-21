import { test, expect } from '@playwright/test';
import { FramerContentPage } from '../src/pages/tella-landing.page';

test.describe('Framer Tabs Tests', () => {
    let contentPage: FramerContentPage;

    test.beforeEach(async ({ page }) => {
        contentPage = new FramerContentPage(page);
        await contentPage.goTo();
    });

    test('Проверка доступных табов', async () => {
        const tabNames = await contentPage.getTabNames();
        expect(tabNames).toContain('Demos');
        expect(tabNames).toContain('Tutorials');
        expect(tabNames).toContain('Courses');
        expect(tabNames.length).toBeGreaterThanOrEqual(3);
    });

    test('Проверка активной вкладки по умолчанию', async () => {
        const activeTab = await contentPage.getActiveTab();
        const tabNames = await contentPage.getTabNames();
        expect(tabNames).toContain(activeTab);
    });

    test('Проверка переключения между табами', async () => {
        const tabNames = await contentPage.getTabNames();
        const initialActiveTab = await contentPage.getActiveTab();
        const tabToSelect = excludeActiveTab(tabNames, initialActiveTab)[0];

        await contentPage.selectTab(tabToSelect);

        const newActiveTab = await contentPage.getActiveTab();
        expect(newActiveTab).toBe(tabToSelect);
        expect(newActiveTab).not.toBe(initialActiveTab);
    });

    test('Проверка наличия видео после выбора таба', async () => {
        await contentPage.selectTab('Tutorials');
        const contentItems = await contentPage.getContentItems();
        expect(contentItems.length).toBeGreaterThan(0);
    });

    test('Контент содержит хотя бы одно видео в табе', async () => {
        await contentPage.selectTab('Tutorials');
        const contentItems = await contentPage.getContentItems();

        expect(contentItems.length).toBeGreaterThan(0);

        for (const item of contentItems) {
            expect(item.videoSrc).not.toBe('');
            expect(item.id).not.toBe('');
        }
    });

    test('Проверка всех табов по циклу', async () => {
        const tabNames = await contentPage.getTabNames();

        for (const tabName of tabNames) {
            await contentPage.selectTab(tabName);
            const activeTab = await contentPage.getActiveTab();
            expect(activeTab).toBe(tabName);

            const contentItems = await contentPage.getContentItems();
            expect(contentItems.length).toBeGreaterThan(0);
        }
    });
});

function excludeActiveTab(tabNames: string[], activeTab: string): string[] {
    return tabNames.filter((tab) => tab !== activeTab);
}
