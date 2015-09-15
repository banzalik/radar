/*global window*/
(function (window) {
    var dir = './detectors/',
        app = {
            init: function () {
            },
            version: require(dir + 'version.js'),
            getRootElement: require(dir + 'getRootElement.js'),
            getViewportSize: require(dir + 'getViewportSize.js'),
            getScreenSize: require(dir + 'getScreenSize.js'),
            getDocumentTitle: require(dir + 'getDocumentTitle.js'),
            getUa: require(dir + 'getUa.js'),
            ajax: require('./network/ajax.js'),
            xpath: require('./xpath/xpath.js'),
            string: require('./string/string.js')
        };

    window.radar = app;
})(window);
