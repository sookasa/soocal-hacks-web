'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAria',
    'ngMaterial',
    'myApp.services',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3',
    'myApp.version'
]).
    config(['$routeProvider', '$httpProvider', '$mdThemingProvider', function ($routeProvider, $httpProvider, $mdThemingProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

        //$mdThemingProvider.theme('default')
        //    .primaryPalette('blue')
        //    .accentPalette('indigo')
        //    .warnPalette('red')
        //    .backgroundPalette('grey');
    }]);
