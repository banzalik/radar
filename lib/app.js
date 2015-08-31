(function (window, document) {
    var dir = './detectors/',
        app = {
            init: function () {
            },
            version: require(dir + 'version.js'),
            getRootElement: require(dir + 'getRootElement.js'),
            getViewportSize: require(dir + 'getViewportSize.js'),
            getScreenSize: require(dir + 'getScreenSize.js'),
            getDocumentTitle: require(dir + 'getDocumentTitle.js'),
            getUa: require(dir + 'getUa.js')
        };

    window.radar = app;
})(window, document);
