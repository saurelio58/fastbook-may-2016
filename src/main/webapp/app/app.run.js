'use strict';

(() => {
  angular
    .module('fastbook')
    .run(run);

    run.$inject = ['$rootScope', 'accessService', '$state'];

    function run($rootScope, accessService, $state) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){
        //let anonymousAllowed = toState.data.anonymousAllowed;
        let loggedIn = accessService.isLoggedIn();

        if(!loggedIn){
          event.preventDefault();$state.go('login')
        }
      });
    }

})();
