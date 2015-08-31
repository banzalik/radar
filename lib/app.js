(function () {
    var dir = './detectors/',
        app = {
            init: function () {
                console.log(this.version);
            },
            version: require(dir + 'version.js'),
            getRootElement: require(dir + 'getRootElement.js'),
            getViewportSize: require(dir + 'getViewportSize.js'),
            getDocumentTitle: require(dir + 'getDocumentTitle.js'),
            getUa: require(dir + 'getUa.js')
        };

    window.radar = app;
})();

