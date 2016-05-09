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
      accessService
        .login(this.credentials)
        // User or password invalid - we don't come back if the user logs in
        // get error in console w/ following code
        // .then(result => {
        //   this.errorMessage = 'Invalid email or password!';
        // })
    }

    this.reset = () => {
      $log.debug('LoginController.reset-init')
      this.credentials = null;
    }
  }
})();
