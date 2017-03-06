import { RoombookingPage } from './app.po';

describe('roombooking App', () => {
  let page: RoombookingPage;

  beforeEach(() => {
    page = new RoombookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
