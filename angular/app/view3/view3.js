'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl',
            controllerAs: 'ctrl'
        });
    }])

    .controller('View3Ctrl', ['$location', 'coreService', function ($location, coreService) {
        this.user = coreService.getUser();
        if (!this.user) {
            $location.path('/view1');
        }
        this.result = coreService.getResult();
    }]);