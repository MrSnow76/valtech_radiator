/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/20/13
 * Time: 16:21
 * To change this template use File | Settings | File Templates.
 */

var configurationLoader = require('./loadConfiguration');

exports.getCurrentPage = function getCurrentPage(){
    var configuration = configurationLoader.loadConfiguration()
        return configuration.get("currentPage");
}