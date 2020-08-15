const { assert } = require("chai")
const loginPage = require('../pages/loginpage')
const homePage = require('../pages/homepage')
const configData = require('../config')
const constants = require('../constant')

describe("Home page feature test",function(){

    //Retry Logic
    this.retries(2)

    it('Verify Home page title',function(){
        browser.url('/')
        //browser.maximizeWindow()
        loginPage.doLogin(configData.username,configData.password)
        const title = homePage.getPageTitle()
        console.log('Home Page title is: ',title)
        assert.equal(constants.HOME_PAGE_TITLE,title,'Home Page title not found')    
    })

    it('Verify  Home Page Header text',function(){
        assert.equal(constants.HOME_PAGE_HEADER,homePage.getHeaderText(),'Home Page Header is not present') 
    })

})