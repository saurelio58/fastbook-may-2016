'use strict';

(() => {
  angular
    .module('fastbook.group')
    .config(config)

    config.$inject = ['groupRoutes', '$stateProvider']

    function config(groupRoutes, $stateProvider) {
      Object.keys(groupRoutes) // JS built in function
        .forEach(key => {
          $stateProvider
            .state(key, groupRoutes[key]);  //accesses each state object given the key and the object
        })
    }

})();
