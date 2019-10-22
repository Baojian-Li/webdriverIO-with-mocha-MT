
import search from '../../pageobjects/mt-search.page';
import assert from 'assert';

/*	This is a BDD test using Mocha JavaScript framework.  */

describe('navigating to search page', function() {
  it('should allow user to navigating search result page by key word search ', function () {
  	
  	let q = "car"
    search.open(q); 
    search.waitForSearchPageToLoad();
    
    console.log(search.getUserInfo());
    
    assert.equal(search.getUserInfo(), `YOUR SEARCH FOR “${q.toUpperCase()}”`);

  });
});
