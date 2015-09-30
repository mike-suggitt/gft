var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\.spec\.js$/.test(file)) {
            tests.push(file);

        }
    }
}

//polyfill for phantomjs  .bind
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {
            },
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

require.config({
    baseUrl: '/base/public/js',
    waitSeconds:0,
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        handlebars: '../../bower_components/handlebars/handlebars',
        text : '../../bower_components/requirejs-text/text'
    },
    deps: tests,
    // start test run, once Require.js is done
    callback: function () {
        require([

        ], function () {
            window.__karma__.start();
        });
    }
});