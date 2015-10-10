'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','coreService', function($scope, coreService) {
      var user = coreService.getUser();
      console.log('user.email=' + user.email);
      $scope.user = coreService.getUser();

}]);