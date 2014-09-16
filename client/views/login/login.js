(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Congrats! You are logged in.');
      $location.path('/');
    }

    function failure(response){
      toastr.error('Sorry, try to login again.');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();
