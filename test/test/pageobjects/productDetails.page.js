const Page = require('./page');

class productDetailsPage extends Page {
    /**
     * define selectors using getter methods
     */
     get productQuantityInput () { return $('#product-details-input') }
     get addToCartButton () { return $('#add-to-cart') }
 
     /**
      * a method to encapsule automation code to interact with the page
      * e.g. to login using username and password
      */
     addQuantityToCart (quantity) {
       this.productQuantityInput.setValue(quantity);
       this.addToCartButton.click();
     }

     open (productId) {
      return super.open(`products/${productId}`);
  }
}

module.exports = new productDetailsPage();