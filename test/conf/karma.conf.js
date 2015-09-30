module.exports = function (config) {
    'use strict';

    config.set({
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['requirejs', 'mocha', 'chai', 'jquery-chai', 'sinon'],

        basePath:'../../',

        // list of files / patterns to load in the browser
        files: [
            'test/unit/require.config.js',
            {pattern:'public/js/*.js', included:false},
            {pattern:'public/js/**/*.js', included:false},
            {pattern:'public/js/**/*.hbs', included:false},

            {pattern:'bower_components/**/*.js', included:false},

            {pattern:'test/unit/**/*.spec.js', included:false}
        ],

        reporters: ['progress'],

        maximumSpecCallbackDepth: 200,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS' /*, 'Chrome'*/],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        client: {
            captureConsole: true
        }
    });
};

