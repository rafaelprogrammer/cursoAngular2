import { EstudoAngular2Page } from './app.po';

describe('estudo-angular2 App', () => {
  let page: EstudoAngular2Page;

  beforeEach(() => {
    page = new EstudoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
