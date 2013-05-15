/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/25/13
 * Time: 17:29
 * To change this template use File | Settings | File Templates.
 */

var configLoader = require('./loadConfiguration')
var configUtility = configLoader.loadConfiguration();

exports.getConfigValue = function(key){
    return configUtility.get(key);
}