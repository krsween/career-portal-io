import { CareerPortalIoPage } from './app.po';

describe('App: AppComponent', function() {
    let page: CareerPortalIoPage;

    beforeEach(() => {
        page = new CareerPortalIoPage();
    });

    it('should have 4 primary navigation buttons.', () => {
        page.navigateTo();
        expect(page.getNavigationLinks()).toEqual(4);
    });
});
