describe('Rocket Commerce', () => {
  it('should be able to log in', () => {
    browser.url('http://localhost:3000');

    //Click Login/Register
    $('.login').click();
    $('#login-email').setValue('alex@alex.ca');
    $('#login-password').setValue('123456');
    $('#login-button').click();
    console.log($('//*[@id="root"]/div/div[1]/div/div[2]/div/h2').getText());

    

  })
})