import { NewcateringPage } from './app.po';

describe('newcatering App', function() {
  let page: NewcateringPage;

  beforeEach(() => {
    page = new NewcateringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
