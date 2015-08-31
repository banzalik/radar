var webpack = require('webpack');

module.exports = function (config) {
    config.set({

        basePath: '',

        browsers: ['PhantomJS'],

        singleRun: true,

        frameworks: ['jasmine'],

        reporters: ['spec', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
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
};
