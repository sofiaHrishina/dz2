import { Before, After } from '@cucumber/cucumber';
import * as fs from 'fs';
import { AmazonWorld } from '../worlds/amazon.world.ts';
import { BrowserContextOptions } from 'playwright';

export function browserContextHook(): void {
    Before(async function (this: AmazonWorld, { pickle }) {
        const featureName = pickle.uri.replace('.feature', '').replace(':', '-').replace('\\', '/');
        const scenarioName = pickle.name.split(':').join('').replace('/', '-').replace('\\', '-');
        const path = 'videos/' + featureName + '/' + scenarioName;

        const options: BrowserContextOptions = {
            recordVideo: { dir: path },
            timezoneId: 'Europe/Kiev',
            viewport: { width: 1280, height: 1024 }
        };

        if (fs.existsSync('browser-context.json')) {
            options.storageState = 'browser-context.json';
        }

        this.context = await AmazonWorld.browser.newContext(options);
        this.page = await this.context.newPage();
    });

    After(async function (this: AmazonWorld) {
        await this.context.close();
    });
}
