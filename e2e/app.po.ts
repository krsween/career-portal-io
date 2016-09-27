import { browser, element, by } from 'protractor/globals';

export class CareerPortalIoPage {
    navigateTo() {
        return browser.get('/');
    }

    getNavigationLinks() {
        return element.all(by.tagName('a')).count();
    }
}
