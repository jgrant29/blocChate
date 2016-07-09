(function() {
   function HomeCtrl($scope, Rooms) {

    $scope.roams = Rooms.all;
    $scope.user = "Guest " + Math.round(Math.random() * 100)

    $scope.addChat = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.roams.$add({
        from: $scope.user,
        content: $scope.roam,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });

      $scope.roam = "";
    };

    $scope.roams.$loaded(function() {
      if ($scope.roams.length === 0) {
        $scope.roams.$add({
          content: "Hello!",
          timestamp: Firebase.ServerValue.TIMESTAMP
        });
      }
    });
  }

   angular
       .module('blocChat')
       .controller('HomeCtrl', ['$scope', 'Rooms', HomeCtrl]);
})();

