const Page = require('./page');

class navBarPage extends Page {
  get checkoutButton() { return $('.cart')}
  get loginButton() {return $('.login')}
  get cartTotal() {return $('.cart-total')}
}

module.exports = new navBarPage();