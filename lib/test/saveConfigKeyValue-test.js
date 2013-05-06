/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/20/13
 * Time: 10:18
 * To change this template use File | Settings | File Templates.
 */

var buster = require('/usr/local/lib/node_modules/buster');
var configurationLoader = require('../lib/src/loadConfiguration');

var configurationSaver = require('../lib/src/saveConfigKeyValue');

buster.testCase("saveConfigKeyValue test ",{
 "save page1:http://valtech.de" : function(done){
 configurationSaver.saveConfigKeyValue("page1", "http://valtech.de");
        buster.assert(true);
        done();
    },
    "save page2:http://nodejs.org/" : function(done){
        configurationSaver.saveConfigKeyValue("page2", "http://nodejs.org/");
        buster.assert(true);
        done();
    },
    "save page3:http://docs.busterjs.org/en/latest/" : function(done){
        configurationSaver.saveConfigKeyValue("page3", "http://docs.busterjs.org/en/latest/");
        buster.assert(true);
        done();
    }
})
