'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$location', 'coreService', function ($scope, $location, coreService) {
        console.log('controller');
        $scope.user = {};
        $scope.user.email = '';
        $scope.login = function () {
            console.log( 'email = ' + $scope.user.email);
            coreService.setUser($scope.user);
            $location.path( '/view2' );
        };
    }]);