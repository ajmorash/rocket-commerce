const Page = require('./page');

class shopPage extends Page {
  /**
   * define selectors using getter methods
   */
   get shopTile () { return $('.shop-tile') }

   /**
    * a method to encapsule automation code to interact with the page
    * e.g. to login using username and password
    */
    clickFirstProduct(){
      this.shopTile.click();
    }

    open () {
      return super.open('');
  }
}

module.exports = new shopPage();