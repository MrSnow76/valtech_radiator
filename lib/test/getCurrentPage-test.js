/**
 * Created with JetBrains WebStorm.
 * User: svenschnee
 * Date: 3/20/13
 * Time: 16:39
 * To change this template use File | Settings | File Templates.
 */

/*
var buster = require('/usr/local/lib/node_modules/buster');
var currentPageGetter = require('../lib/getCurrentPage');
var configKeyValueSaver = require('../lib/saveConfigKeyValue')
var configLoader = require('../lib/loadConfiguration');
var configUtility = configLoader.loadConfiguration();
configUtility.set("currentPage","0");
*/

buster.testCase("test for getting the current page",{
  "→ should be zero": function(){
      assert.same(currentPageGetter.getCurrentPage(),"0");
  }
})

/*
configUtility.set("currentPage","2345");

buster.testCase("test for getting the current page", {
    "→ should fail": function(){
        refute.equals(currentPageGetter.getCurrentPage(),"0");
    }
})

configUtility.set("currentPage","2");

buster.testCase("test for getting the current page", {
    " check for 2": function(){
        assert.same(currentPageGetter.getCurrentPage(),"2");
    }
})*/
