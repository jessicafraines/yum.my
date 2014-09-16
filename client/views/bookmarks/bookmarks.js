(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', 'Category', 'Bookmark', function($scope, Category, Bookmark){
    $scope.categories = [];
    $scope.bookmarks = [];

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });
    $scope.addCategory = function(){
      Category.create($scope.name).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.name = '';
      });
    };
    $scope.addBookmark = function(){
      Bookmark.create($scope.name).then(function(response){
        $scope.bookmarks.push(response.data.bookmarks);
        $scope.name = '';
      });
    };

  }]);
})();

