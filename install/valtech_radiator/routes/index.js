
/*
 * GET home page.
 */
var configValueGetter = require('../lib/src/getConfigValue');

var currentPageIndex = configValueGetter.getConfigValue("currentPage");
var urlToLoad = configValueGetter.getConfigValue("page"+currentPageIndex);
var maxPageIndex = configValueGetter.getConfigValue("maxPageIndex");
var arrayLoader = require('../lib/src/getAllUrls');
var urlArray = arrayLoader.getAllUrls();
var showDelay = configValueGetter.getConfigValue("pageShowDelay");
var configTitle = configValueGetter.getConfigValue("title");
var configHeader = configValueGetter.getConfigValue("header");

exports.index = function (req, res) {
    res.render('index', {
        title: configTitle,
        headline: configHeader,
        currentIndex: currentPageIndex,
        maxIndex: maxPageIndex,
        pageUrl: urlToLoad,
        allUrls: urlArray,
        delay: showDelay,
        footer: ''
    });
};