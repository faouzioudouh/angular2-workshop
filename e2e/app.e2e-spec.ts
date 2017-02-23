import { SqliAngularPage } from './app.po';

describe('sqli-angular App', () => {
  let page: SqliAngularPage;

  beforeEach(() => {
    page = new SqliAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
