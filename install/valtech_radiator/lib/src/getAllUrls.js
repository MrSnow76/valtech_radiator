/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/25/13
 * Time: 17:27
 * To change this template use File | Settings | File Templates.
 */

var configLoader = require('./getConfigValue');
exports.getAllUrls = function(){
    var allUrls = new String();
    var index = 0;
    do{
        var configUrl = configLoader.getConfigValue("page"+index);
        if(configUrl != undefined){
            if(index > 0){
                allUrls+=",";
            }
            allUrls+="\""+configUrl+"\"";
        }
        index++;
    }while(configUrl != undefined);
    return allUrls;
}