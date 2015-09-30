require.config({
    baseUrl: '/js',
    waitSeconds:0,
    paths: {
        jquery: '/bower_components/jquery/dist/jquery',
        handlebars: '/bower_components/handlebars/handlebars',
        text : '/bower_components/requirejs-text/text'
    }
});

require([
    'jquery'
], function ($) {
    'use strict';

    $(document).ready(function() {
        require(['app/main'], function() {

        });
    });

});