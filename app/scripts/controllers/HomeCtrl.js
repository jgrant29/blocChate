(function() {
   function HomeCtrl($scope, Room) {

    $scope.user = "Guest " + Math.round(Math.random() * 100);
    $scope.room = Room

  }

   angular
       .module('blocChat')
       .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();

