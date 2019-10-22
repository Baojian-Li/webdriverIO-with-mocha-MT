
import article from '../../pageobjects/mt-article.page';
import assert from 'assert';
import utl from '../../utilities/common-utilities';
//var utl = require('../../utilities/common-utilities');


/* This is a BDD test using Mocha JavaScript framework */

describe('navigating to article landing page', function() {

  let slug = '2020-volkswagen-atlas-cross-sport-photos-info';
  
  it('should allow user to get article title', function () {

    article.open(slug);
    article.waitForArticlePageToLoad();

    article.getArticleTitle();
  });

  it('should allow user to get article sub title', function () {

    article.open(slug);
    article.waitForArticlePageToLoad();

    article.getArticleSubTitle();
  });

  it('should allow user to click article main image', function () {

    article.open(slug);
    article.waitForArticlePageToLoad();

    article.clickMainImage();
  });

  it('should allow user to get article body', function () {

    article.open(slug);
    article.waitForArticlePageToLoad();

    article.getBodyText();
  });

  // it('should allow user to click image gallery', function () {

  //   article.open(slug);
  //   article.waitForArticlePageToLoad();

  //   article.clickImageGallery();
  // });

  it('should allow user to click realated article', function () {

    article.open(slug);
    article.waitForArticlePageToLoad();

    article.clickRelatedArticle();
  });
});
