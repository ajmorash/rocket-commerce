const Page = require('./page');

class checkoutPage extends Page {

  get cartItemName() { return $('.cart-item-name')}
  get cartItemPrice() { return $('.cart-item-price')}
  get cartItemQuantity() { return $('.cart-item-quantity')}
  get cartItemQuantityInput() { return $('.cart-item-quantity-input')}
  get EditQuantityButton() { return $('.cart-item-edit-quantity')}
  get removeButton() { return $('.cart-item-remove')}

  setNewQuantity(newQuantity){
    this.EditQuantityButton.click();
    this.cartItemQuantityInput.setValue(newQuantity);
    this.EditQuantityButton.click();
  }

}

module.exports = new checkoutPage();