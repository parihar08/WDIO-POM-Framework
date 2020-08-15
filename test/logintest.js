const { assert } = require("chai")
const loginPage = require('../pages/loginpage')
const configData = require('../config')
const constants = require('../constant')

describe("Login page feature test",function(){

    //Retry Logic
    this.retries(2)

    it('Verify Login page title',function(){
        browser.url('/')
        //browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('Login Page title is: ',title)
        assert.equal(constants.LOGIN_PAGE_TITLE,title,'Login Page title not found')    
    })

    //it.only('Verify Signup link exists?',function(){})
    it('Verify Signup link exists?',function(){
        //browser.url('/')
        assert.equal(true,loginPage.doSignUpLinkExist(),'Sign up link is not present') 
    })

    it('Verify Login',function(){
       loginPage.doLogin(configData.username,configData.password)    
    })

})