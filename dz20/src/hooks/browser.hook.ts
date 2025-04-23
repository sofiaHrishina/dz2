import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { AmazonWorld } from '../worlds/amazon.world.ts';

export function browserHook(): void {
    BeforeAll(async function () {
        AmazonWorld.browser = await chromium.launch({ headless: false });
    });

    AfterAll(async function () {
        await AmazonWorld.browser.close();
    });
}
