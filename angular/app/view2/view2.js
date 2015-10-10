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
        $scope.choices = [
            {
                name: 'Pacific Catch',
                tags: ['asian'],
                picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                yelp: 'http://www.yelp.com/pacific-catch'
            },
            {
                name: 'Seniores Pizza',
                tags: ['pizza'],
                picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                yelp: 'http://www.yelp.com/seniores-pizza'
            },
            {
                name: 'B Street and Vine',
                tags: ['italian'],
                picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                yelp: 'http://www.yelp.com/b-street-and-vine'
            }
        ];
        //console.log('user.email=' + user.email);
        //$scope.user = coreService.getUser();

    }]);