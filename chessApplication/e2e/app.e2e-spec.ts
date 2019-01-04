import { ChessApplicationPage } from './app.po';

describe('chess-application App', function() {
  let page: ChessApplicationPage;

  beforeEach(() => {
    page = new ChessApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
