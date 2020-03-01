var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

When('I open the login screen', () => {
    const btnIngresar = $('button=Ingresar');
    btnIngresar.waitForExist(5000);
    btnIngresar.waitForDisplayed(5000);
    browser.waitUntil(() => btnIngresar.isClickable());
    btnIngresar.click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue(email);

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
});

When(/^I enter (.*) and (.*)$/ , (email, password) => {
    var cajaSignUp = $('.cajaSignUp');

    var mailInput = cajaSignUp.$('input[name="correo"]');
    browser.waitUntil(() => mailInput.isClickable());
    mailInput.click();
    mailInput.setValue(email);

    var passwordInput = cajaSignUp.$('input[name="password"]');
    browser.waitUntil(() => passwordInput.isClickable());
    passwordInput.click();
    passwordInput.setValue(password);
});

When(/^I register (.*) and (.*) and (.*) and (.*)$/ , (email, password, firstname, lastname) => {
    var cajaSignUp = $('.cajaSignUp');

    var mailInput = cajaSignUp.$('input[name="correo"]');
    browser.waitUntil(() => mailInput.isClickable());
    mailInput.click();
    mailInput.setValue(email);

    var passwordInput = cajaSignUp.$('input[name="password"]');
    browser.waitUntil(() => passwordInput.isClickable());
    passwordInput.click();
    passwordInput.setValue(password);

    var firstnameInput = cajaSignUp.$('input[name="nombre"]');
    browser.waitUntil(() => firstnameInput.isClickable());
    firstnameInput.click();
    firstnameInput.setValue(firstname);

    var lastnameInput = cajaSignUp.$('input[name="apellido"]');
    browser.waitUntil(() => lastnameInput.isClickable());
    lastnameInput.click();
    lastnameInput.setValue(firstname);

    var aceptaInput = cajaSignUp.$('input[name="acepta"]');
    browser.waitUntil(() => aceptaInput.isClickable());
    aceptaInput.click();

    var ddlElement = cajaSignUp.$('select[name="idPrograma"]');
    ddlElement.selectByIndex(5);  
});

When('I try to login', () => {
    var cajaLogIn = $('.cajaLogIn');
    cajaLogIn.$('button=Ingresar').click();
});

When('I try to register', () => {
    var cajaSignUp = $('.cajaSignUp');
    var btnRegistrarse = cajaSignUp.$('button=Registrarse');
    browser.waitUntil(() => btnRegistrarse.isClickable());
    btnRegistrarse.click();
});

Then('I expect to see {string}', error => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    var alertText = browser.$('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});

Then('I expect to be able to login', () => {
    var btnUser = $('#cuenta');
    expect(btnUser).to.not.be.null;
});

Then('I expect to be able to register', () => {
    $('.sweet-alert').waitForDisplayed(5000);
    var sweetAlert = $('.sweet-alert');
    expect(sweetAlert).to.not.be.null;
});
