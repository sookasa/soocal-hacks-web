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
        this.choices = coreService.getChoices();
        //console.log('user.email=' + user.email);
        //this.user = coreService.getUser();
        this.vote = function () {
            console.log('voting...');
            coreService.vote(this.choices);
            $location.path( '/view3' );
        };

    }]);