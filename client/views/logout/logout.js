(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LogoutCtrl', ['$location', 'User', function($location, User){
    User.logout().then(function(){
      toastr.success('Congrats! You are logged out.');
      $location.path('/');
    });
  }]);
})();
