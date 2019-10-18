import Page from './page'

class HomePage extends Page {

    /*** define elements*/
    get pageTitle() { return $('<title />'); }
    get seaerchBox()   { return $('//input[@class="kfzVswNFRv1zUVo8YsWzz"]'); }
    get submitButton()   { return $('//button[@class="_1xijUFRxQN9D3v3Q_NwDQh"]'); }
    
    get mainHeroImage ()     { return $('//div[@data-c="hero-main-card"]'); }

    get TeaseHeroImage ()     { return $('//div[@class="_1_6pqstVLSx_GdU1oGP82W"]'); }
    get TeaseHeroImagelink ()     { return $('//div[@class="_3DzRddrBR5w3rw9il9HQpt"]'); }

    // get contactUsText ()     { return $('//div/h3[contains(., "Contact Us")]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('/')
        browser.pause(1000);
    }

    waitForHomePageToLoad () {
      if(!this.mainHeroImage.isDisplayed()){
        this.mainHeroImage.waitForDisplayed(1000);
      }
    }

    getPageTitle(){
      this.pageTitle.getText();
    }

    search(q) {
      this.seaerchBox.setValue(q);
      this.submitButton.click();
      browser.pause(2000);
    }

    heroImage() {
      this.mainHeroImage.click();
      browser.pause(1000); 
    }

    teaseImage(){
      this.TeaseHeroImagelink.click();      
    }

}

export default new HomePage()
