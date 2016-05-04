'use strict';

(() => {
  angular
    .module('fastbook.access')
    .service('accessService', AccessService);

    AccessService.$inject = ['bcrypt', '$http', '$log', '$location'];

    function AccessService(bcrypt, $http, $log, $location) {
      this.currentUser;

      this.register = (user) => {

        return $http
          .post('./api/users', user)
          .then(response => response.data)
          .then(user => this.currentUser = user);
        };

      this.login = (credentials) => {
        $log.debug('Calling AccessService.login()');
        $http
          .post('./api/users/login', credentials.email)                          // returns response
          .then(response => response.data)                                      // t response, r user
          .then(user => {
            if(bcrypt.compareSync(credentials.password, user.password)) {
              $log.debug('User Authenticated');
              this.currentUser = user;
              delete this.currentUser.password;
              $log.debug(this.currentUser);
              credentials = undefined;
              $location.path('users/' + this.currentUser.id);
            }
            else {
              $log.debug('invalid username or password');
              this.currentuser = undefined;
            }
          })
          .catch(error => $log.debug(JSON.stringify(error)));
      }

    this.logout = () => this.currentUser = undefined;

    this.isLoggedIn = () => this.currentUser !== undefined;


    }

})();
