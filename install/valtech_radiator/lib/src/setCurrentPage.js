/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/21/13
 * Time: 12:15
 * To change this template use File | Settings | File Templates.
 */

var configurationSetter = require('./saveConfigKeyValue');

exports.setCurrentPage = function setCurrentPage(pageNumberAsString){
    configurationSetter.saveConfigKeyValue("currentPage", pageNumberAsString);
}
