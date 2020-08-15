const elementUtil = require('../util/elementUtil')
const constants = require('../constant')

class HomePage{

    get header(){
        return $('h1.private-header__heading')
    }

    getPageTitle(){
        return elementUtil.doGetPageTitle(constants.HOME_PAGE_TITLE)
    }

    getHeaderText(){
        return elementUtil.doGetText(this.header)
    }
}

module.exports = new HomePage()