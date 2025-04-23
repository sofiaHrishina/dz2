import { After, Before } from '@cucumber/cucumber';
import { AmazonWorld } from '../worlds/amazon.world.ts';

export function pageHook(): void {
    Before(async function (this: AmazonWorld) {
        this.page = await this.context.newPage();
    });

    After(async function (this: AmazonWorld) {
        await this.page.close();
    });
}
