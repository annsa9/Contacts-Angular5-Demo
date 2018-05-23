import { AppPage } from './app.po';

describe('contacts App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display no contact message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('No contacts to dispaly. Add contact.');
  });
});
