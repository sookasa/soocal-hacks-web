'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope', '$location', 'coreService', function ($scope, $location, coreService) {
        var user = coreService.getUser();
        if (!user) {
            $location.path('/view1');
        }
    }]);