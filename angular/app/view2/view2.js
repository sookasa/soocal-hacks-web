'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$location', 'coreService', function ($scope, $location, coreService) {
        var user = coreService.getUser();
        if (!user) {
            console.log('wrong virw');
            $location.path('/view1');
        }
        //console.log('user.email=' + user.email);
        //$scope.user = coreService.getUser();

    }]);