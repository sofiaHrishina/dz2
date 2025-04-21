import { Browser, Builder, Locator, WebDriver, WebElementPromise, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function getBrowserInstance(): Promise<WebDriver> {
    const options = new chrome.Options();
    options.addArguments(`user-data-dir=${process.cwd()}/chrome-profile`);
    const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
    await driver.manage().window().maximize();
    //driver.manage().setTimeouts({ implicit: 10000 }); // do not mix implicit and explicit wait as it could lead to unexpected behavior
    return driver;
}

export async function closeBrowserInstance(driver: WebDriver): Promise<void> {
    await driver.close();
}

export function getWaitedLocator(driver: WebDriver, locator: Locator): WebElementPromise {
    // ideally timeout should come from configs but in demo purposes it's hardcoded here
    return driver.wait(until.elementLocated(locator), 10000);
}
