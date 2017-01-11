import { BlocChatPage } from './app.po';

describe('bloc-chat App', function() {
  let page: BlocChatPage;

  beforeEach(() => {
    page = new BlocChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
