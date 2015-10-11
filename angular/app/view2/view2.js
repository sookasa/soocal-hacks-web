'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'ctrl'
        });
    }])

    .controller('View2Ctrl', ['$location', '$filter', '$mdToast', 'coreService',
        function ($location, $filter, $mdToast, coreService) {

            this.user = coreService.getUser();
            if (!this.user) {
                $location.path('/view1');
            }

            coreService.receiveChoices().then(
                function (response) {
                    this.choices = response.data.choices;
                }.bind(this),
                function () {
                    this.error = true;
                    var toast = $mdToast.simple()
                        .content('Something went wrong.')
                        .action('Dismiss')
                        .hideDelay(0)
                        .highlightAction(true);
                    $mdToast.show(toast).then(function (response) {
                        $location.path('/view1');
                    });
                }.bind(this)
            );

            this.vote = function () {
                coreService.sendVote(this.choices).then(
                    function () {
                        $mdToast.show($mdToast.simple()
                            .content('Got it.')
                            .hideDelay(3000));
                        $location.path('/view3');
                    },
                    function () {
                        this.error = true;
                        var toast = $mdToast.simple()
                            .content('Something went wrong.')
                            .action('Dismiss')
                            .hideDelay(0);
                        $mdToast.show(toast).then(function (response) {
                            $location.path('/view1');
                        });
                    }.bind(this)
                );

            };

        }]);