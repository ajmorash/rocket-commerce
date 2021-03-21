const checkoutPage = require('../pageobjects/checkout.page');
const shopPage = require('../pageobjects/shop.page');
const productDetailsPage = require('../pageobjects/productDetails.page');
const navBarPage = require('../pageobjects/navBar.page');
const chai = require('chai')

describe('Rocket Commerce', () => {
  it('Should be able to add products to the shopping cart', () => {
    //open shop and click first product tile to open product details page
    shopPage.open();
    shopPage.clickFirstProduct();
    
    //add 10 of product to the cart
    productDetailsPage.addQuantityToCart(10);

    //click on the shopping cart checkout button
    navBarPage.checkoutButton.click();

    //confirm that the cart total in the nav bar is correct
    const cartTotal = navBarPage.cartTotal;
    chai.expect(cartTotal.getText()).to.be.equal('$50.00 (10)');

    //Check that all the values in the cart are correct
    const cartItemName = checkoutPage.cartItemName;
    const cartItemPrice = checkoutPage.cartItemPrice;
    const cartItemQuantity = checkoutPage.cartItemQuantity;
    chai.expect(cartItemName.getText()).to.be.equal('Kazoo 2');
    chai.expect(cartItemPrice.getText()).to.be.equal('5');
    chai.expect(cartItemQuantity.getText()).to.be.equal('10');

    //set a new quantity and make sure that quantity and cart total get updated successfully
    checkoutPage.setNewQuantity(20);
    chai.expect(cartItemQuantity.getText()).to.be.equal('20');
    chai.expect(cartTotal.getText()).to.be.equal('$100.00 (20)');
  })
})
