const elementUtil = require('../util/elementUtil')
const constants = require('../constant')

class LoginPage{

//Page Locators
    get username(){
        return $('#username')
    }

    get password(){
        return $('#password')
    }

    get loginBtn(){
        return $('#loginBtn')
    }
        
    get signUpLink(){
        return $('=Sign up')
    }

//Page Actions
    getPageTitle(){
        return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }

    doSignUpLinkExist(){
        return elementUtil.doIsDisplayed(this.signUpLink)
    }

    doLogin(emailId,pwd){
        elementUtil.doSetValue(this.username,emailId)
        elementUtil.doSetValue(this.password,pwd)
        elementUtil.doClick(this.loginBtn)
    }
    
}

    module.exports = new LoginPage()