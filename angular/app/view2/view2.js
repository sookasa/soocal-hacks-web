'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'ctrl'
        });
    }])

    .controller('View2Ctrl', ['$location', 'coreService', function ($location, coreService) {
        this.user = coreService.getUser();
        console.log(this.user);
        if (!this.user) {
            console.log('wrong virw');
            $location.path('/view1');
        }
        this.choices = [
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
        //this.user = coreService.getUser();

    }]);