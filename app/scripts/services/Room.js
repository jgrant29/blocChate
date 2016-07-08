(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://blocchat2.firebaseio.com/rooms");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();