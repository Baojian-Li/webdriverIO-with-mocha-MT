import Page from './page';
import utl   from '../utilities/common-utilities';

class ArticlePage extends Page {

    /*** define elements ***/

    get articleTitle()  { return $('//h1[@class="NNlNPAytZNWqPEnch01yw"]'); }
    get subTitle()   { return $('//h2[@class="_32iNEwtaJzndgRsWTlyVgl"]'); }
    get articleMainImage()   { return $('//img[@class="_3huLWEVmUN2IsrlDt2eGQW _3BGrUiX5MUchdpkSgkmF4l"]'); }
    get articleMainBody()   { return $('//div[@class="_2i56PSm8nKInQH87DrHRyB"]'); }
    get articleImageGalleries()   { return $('//button[@class="_3rWC6GE-ceXlZthDFKm2gc"]'); }
    get articleRelatedArtilces()   { return $('//section[@data-c="related-articles"]'); }


    // get usernameInput()   { return $('//*[@name="username"]'); }
    // get passwordInput()   { return $('//*[@name="password"]'); }
    // get rememberMe ()     { return $('//*[@id="remember-me"]'); }
    // get loginButton()     { return $('//button[contains(., "Login")]'); }
    // get footerImage()     { return $('//*[@class="pull-right brand img-responsive"]'); }


    /*** define or overwrite page methods ***/
    open (slug) {
        super.open('/news/' + slug);
        browser.pause(1000);
    }

    /*** your page specific methods ***/

    waitForArticlePageToLoad () {
      if(!this.articleTitle.isDisplayed()){
        this.articleTitle.waitForDisplayed(1000);
      }
    }

    getArticleTitle() {
      this.articleTitle.getText();
    }

    getArticleSubTitle() {
      this.subTitle.getText();
    }

    getBodyText() {
      this.articleMainBody.getText();
    }

    clickMainImage() {
      this.articleMainImage.click();
    }

    clickImageGallery() {
      this.articleImageGalleries.click();
    }

    clickRelatedArticle(){
      this.articleRelatedArtilces.click();
    }

    // login (username, password) {
    //   this.waitForloginPageToLoad(10000);
    //   this.usernameInput.setValue(username);
    //   this.passwordInput.setValue(password);
    //   this.rememberMe.click();
    //   this.loginButton.click();
    // }
}

export default new ArticlePage()
