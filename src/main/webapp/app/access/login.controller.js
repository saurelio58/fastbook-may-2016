'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['accessService', '$state', '$window'];

  function LoginController(accessService, $state, $window) {
    this.credentials;
    this.login = () =>
      accessService
        .login(this.credentials)
        .then(user =>
          user ?
            $state.go('profile')
              .then(() => this.credentials = undefined)
            : ($window.alert('invalid username or password')
                    .catch(error => $window.alert(JSON.stringify(error)))
        ));
  }
})();
