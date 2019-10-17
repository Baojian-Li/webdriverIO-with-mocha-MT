
import home from '../pageobjects/mt-home.page';
import search from '../pageobjects/mt-search.page';
import assert from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('navigating to home page', function() {

  // it('should allow user to navigating home page to get Page title', function () {
  //   home.open();
  //   home.waitForHomePageToLoad();

  //   let title = home.getPageTitle();
  //   assert.equal(title, 'Motortrend: New Cars - Car News and Expert Reviews');

  // });

  it('should allow user to navigating home page to do key wor search', function () {
    let q = "Super car";
    home.open();
    home.waitForHomePageToLoad();

    home.search(q);
    assert.equal(search.getUserInfo(), `YOUR SEARCH FOR “${q.toUpperCase()}”`);

  });

  it('should allow user to navigating home page to get and click main hero image', function () {
    home.open();
    home.waitForHomePageToLoad();

    home.heroImage();
    //assert.equal(search.getUserInfo(), `Your search for “@{q}”`);

  });
  
  it('should allow user to navigating home page to get and click tease image', function () {
    home.open();
    home.waitForHomePageToLoad();
    
    home.teaseImage();
    //assert.equal(search.getUserInfo(), `Your search for “@{q}”`);

  });
  
});
