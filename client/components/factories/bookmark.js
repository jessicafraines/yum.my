(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Bookmark', ['$http', function($http){

    function create(name){
      return $http.post('/bookmarks', {name:name});
    }

    function all(){
      return $http.get('/bookmarks');
    }

    return {create:create, all:all};
  }]);
})();

