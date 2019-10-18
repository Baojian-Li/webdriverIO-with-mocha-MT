import Page from './page'

class SearchPage extends Page {

    /*** define elements*/

    get resultMessage () { return $('//h1[@class="title"]'); }

    /**
     * define or overwrite page methods
     */
    open (q) {
        super.open('/s/' + q)
        browser.pause(1000);
    }

    waitForSearchPageToLoad () {
      if(!this.resultMessage.isDisplayed()){
        this.resultMessage.waitForDisplayed(1000);
      }
    }
    
    getUserInfo (){
      return this.resultMessage.getText();
    }


}

export default new SearchPage()
