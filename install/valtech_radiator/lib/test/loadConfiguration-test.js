/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/19/13
 * Time: 16:50
 * To change this template use File | Settings | File Templates.
 */

var buster = require('/usr/local/lib/node_modules/buster');
var configurationLoader = require('../lib/src/loadConfiguration');

buster.testCase("load configuration test",{
    "→ check for config utility": function(done) {
        var configUtility = configurationLoader.loadConfiguration()
        if(configUtility == undefined){
            buster.assert(false);
        }
        else{
            buster.assert(true);
        }
        done();
    },
    "→ check for page1": function(done){
        var configUtility = configurationLoader.loadConfiguration();
        if(configUtility){
            var urlForPage1 = configUtility.get('page1');
            assert.same(urlForPage1,"http://valtech.de");
            done();
        }
    },
    "→ check for page2": function(done){
        var configUtility = configurationLoader.loadConfiguration();
        if(configUtility){
            var urlForPage2 = configUtility.get('page2');
            assert.same(urlForPage2,"http://nodejs.org/");
            done();
        }
    },
    "→ check for page3": function(done){
        var configUtility = configurationLoader.loadConfiguration();
        if(configUtility){
            var urlForPage3 = configUtility.get('page3');
            assert.same(urlForPage3,"http://docs.busterjs.org/en/latest/");
            done();
        }
    }
})

