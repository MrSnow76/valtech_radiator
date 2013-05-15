
var configUtility = require('nconf');

exports.loadConfiguration = function loadConfiguration(){
    configUtility.use('file', {file: '/Users/svenschnee/WebstormProjects/valtech_radiator/lib/server/config.json'})
    configUtility.load(function(error){
        if (error) {
            console.error(error.message);
            return;
        }
    });

    return configUtility;
}