'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'ctrl'
        });
    }])

    .controller('View1Ctrl', ['$location', 'coreService', function ($location, coreService) {
        console.log('controller');
        this.user = {};
        //this.user.email = '';
        coreService.setUser(this.user);
        this.login = function () {
            console.log( 'email = ' + this.user);
            coreService.setUser(this.user);
            $location.path( '/view2' );
        };
    }]);