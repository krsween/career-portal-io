import { CareerPortalIoPage } from './app.po';

describe('career-portal-io App', function() {
  let page: CareerPortalIoPage;

  beforeEach(() => {
    page = new CareerPortalIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
