'use strict';

(() => {
  angular
    .module('fastbook')
    .run(run);

  run.$inject = ['$rootScope', 'accessService', '$state', '$stateParams', '$log'];

  function run($rootScope, accessService, $state, $stateParams, $log) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $log.debug('app.run.js - before $state.go');

    $state.go('friendRequests')

    $log.debug('app.run.js- after $state.go');

    // $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
    //   let loggedIn = accessService.isLoggedIn();
      // if(!loggedIn){
      //   event.preventDefault();$state.go('login')
      // }
    // });
  }

})();
