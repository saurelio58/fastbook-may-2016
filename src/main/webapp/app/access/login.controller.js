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
        .then(user => user ? $state.go('profile')
            : ($window.alert('invalid username or password')
                    .then(() => this.credentials = undefined)
                    .catch(error => $window.alert(JSON.stringify(error)))
        ));
  }
})();
