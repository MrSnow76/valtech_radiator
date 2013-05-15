/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/20/13
 * Time: 10:08
 * To change this template use File | Settings | File Templates.
 */

var configurationLoader = require('./loadConfiguration');
var configUtility = configurationLoader.loadConfiguration();

exports.saveConfigKeyValue = function saveConfigKeyValue(key, value){
    configUtility.set(key,value);
    configUtility.save(function (error) {
        if (error) {
            console.error(error.message);
        }
    });
}