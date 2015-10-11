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
        coreService.receiveResults().then(function (response) {
            console.log(response);
            this.result = [response.data.result];
        }.bind(this), function () {
            this.error = true;
            var toast = $mdToast.simple()
                .content('Something went wrong.')
                .action('Dismiss')
                .hideDelay(0);
            $mdToast.show(toast).then(function (response) {
                $location.path('/view1');
            });
        }.bind(this));
    }]);