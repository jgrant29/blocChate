(function() {
  function Rooms($firebaseArray) {
    var randomRoomId = Math.round(Math.random() * 10000000);
    var ref = new Firebase("https://blocchat2.firebaseio.com");
    var roams = $firebaseArray(ref.child('roams'));

    return {all: roams} 
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();