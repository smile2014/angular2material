import { Angular2material2Page } from './app.po';

describe('angular2material2 App', function() {
  let page: Angular2material2Page;

  beforeEach(() => {
    page = new Angular2material2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
