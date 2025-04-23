import { BeforeAll } from '@cucumber/cucumber';
import { AmazonWorld } from '../worlds/amazon.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function () {
        AmazonWorld.globalContext = new Map();
    });
}
