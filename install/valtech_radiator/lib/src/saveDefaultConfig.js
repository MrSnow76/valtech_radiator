/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/21/13
 * Time: 15:39
 * To change this template use File | Settings | File Templates.
 */

var saveConfigKeyValues = require('./saveConfigKeyValue')

exports.saveDefaultConfig = function saveDefaultConfig(){
    saveConfigKeyValues.saveConfigKeyValue("currentPage", "1");
    saveConfigKeyValues.saveConfigKeyValue("maxPageIndex", "4");
    saveConfigKeyValues.saveConfigKeyValue("pageShowDelay", "3000");
    saveConfigKeyValues.saveConfigKeyValue("title", "Valtech Radiator");
    saveConfigKeyValues.saveConfigKeyValue("header", "My Information Radiator Header");
    saveConfigKeyValues.saveConfigKeyValue("page0", "http://agilemanifesto.org/");
    saveConfigKeyValues.saveConfigKeyValue("page1", "http://valtech.de");
    saveConfigKeyValues.saveConfigKeyValue("page2", "http://nodejs.org/");
    saveConfigKeyValues.saveConfigKeyValue("page3", "http://docs.busterjs.org/en/latest/");
    saveConfigKeyValues.saveConfigKeyValue("page4", "http://www.wikipedia.org/");
}

