'use strict';

(() => {
  angular
    .module('fastbook')
    .run(run);

    run.$inject = ['$rootScope', 'accessService', '$state', '$stateParams'];

    function run($rootScope, accessService, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){
        let loggedIn = accessService.isLoggedIn();

        if(toState.data == false && !loggedIn){
          event.preventDefault();$state.go('login')
        }

      });
    }

})();
