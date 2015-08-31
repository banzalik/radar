module.exports = function (config) {
    var screen = {
        width: 1980,
        height: 1240
    };
    config && config.set({

        basePath: '',

        browsers: ['PhantomJS_Desktop'],

        singleRun: true,

        frameworks: ['jasmine'],

        reporters: ['coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        customLaunchers: {
            'PhantomJS_Desktop': {
                base: 'PhantomJS',
                options: {
                    viewportSize: screen
                }
            }
        },

        files: [
            // all files ending in ".test"
            'tests.webpack.js'
            // each file acts as entry point for the webpack configuration
        ],

        colors: true,

        preprocessors: {
            // add webpack as preprocessor
            'tests.webpack.js': ['webpack', 'sourcemap', 'coverage']
        },

        webpack: {
            disableSha1: false, //defaults to false
            disableLogging: false, //defaults to false
            cache: true,
            devtool: 'inline-source-map'
        },
        webpackServer: {
            // webpack-dev-server configuration
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        }

    });

    return {
        screen: screen
    };
};
