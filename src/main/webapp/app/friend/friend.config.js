'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .config(config)

    config.$inject = ['friendRoutes', '$stateProvider']

    function config(friendRoutes, $stateProvider) {
      Object.keys(friendRoutes) // JS built in function
        .forEach(key => {
          $stateProvider
            .state(key, friendRoutes[key]);  //accesses each state object given the key and the object
        })
    }

})();
