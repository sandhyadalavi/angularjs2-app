import { Angularjs2AppPage } from './app.po';

describe('angularjs2-app App', () => {
  let page: Angularjs2AppPage;

  beforeEach(() => {
    page = new Angularjs2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
