'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['accessService', '$state', '$window', '$log'];

  function LoginController(accessService, $state, $window, $log) {

    this.credentials;

    $log.debug('LoginController-init')

    this.credentials;

    this.login = () => {
      $log.debug('LoginController.login-init')
      this.errorMessage = null;
      accessService
        .login(this.credentials)
        .then(result => {
          // User or password invalid - we don't come back if the user logs in
          this.errorMessage = 'Invalid email or password!';
        })
    }

    this.reset = () => {
      $log.debug('LoginController.reset-init')
      this.credentials = null;
    }
  }
})();
