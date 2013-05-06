/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/21/13
 * Time: 11:52
 * To change this template use File | Settings | File Templates.
 */

var currentPageLoader = require('./getCurrentPage');
var currentPageIndex = currentPageLoader.getCurrentPage();
var maxPageIndexGetter = require('./getMaxPageIndex');
var configLoader = require('./loadConfiguration');
var configUtility = configLoader.loadConfiguration();
var urlToLoad = configUtility.get("page"+currentPageIndex);

var currentPageSetter = require('./setCurrentPage');
var maxPageIndex = maxPageIndexGetter.getMaxPageIndex();

exports.loadNextPage = function loadNextPage(){
    if(currentPageIndex >= maxPageIndex){
        currentPageIndex = 0;
    }
    currentPageSetter.setCurrentPage(currentPageIndex++);
    return urlToLoad;
}