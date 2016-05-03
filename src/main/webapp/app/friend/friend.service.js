'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .service('friendService', FriendService);

    FriendService.$inject = ['$http'];

    function FriendService($http) {

    }

})();
