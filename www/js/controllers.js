angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$q) {
          //查看所有灰度  start
          var deferred = $q.defer();
          $scope.greyServers = {};
          $http({
                url:'http://127.0.0.1:9001/v1/grey_servers',
                method:"GET"
              }).success(function(data, status, headers, config) {
                 deferred.resolve(data);
              }).error(function(data, status, headers, config) {

              });
          var promise = deferred.promise;
          promise.then(function(data) {
            console.log(data);
              $scope.greyServers=data
          });
          //查看受检单位名称  end
    })
.controller('ConfigsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

    .controller('ConfigDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SyncCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
