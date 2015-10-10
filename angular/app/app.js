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
    config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('indigo')
            .warnPalette('red')
            .backgroundPalette('grey');
    }]);
