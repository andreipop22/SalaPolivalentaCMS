import { SalaPolivalentaPage } from './app.po';

describe('sala-polivalenta App', () => {
  let page: SalaPolivalentaPage;

  beforeEach(() => {
    page = new SalaPolivalentaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
