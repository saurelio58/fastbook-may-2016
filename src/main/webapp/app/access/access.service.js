'use strict';

(() => {
  angular
    .module('fastbook.access')
    .service('accessService', AccessService);

    AccessService.$inject = ['bcrypt', '$http', '$log'];

    function AccessService(bcrypt, $http, $log) {
      this.currentUser;

      this.register = (user) => {

        return $http
          .post('./api/users', user)
          .then(response => response.data)
          .then(user => this.currentUser = user);
        };

      this.login = credentials =>
        $http
          .get('./api/users/login', credentials.username)                       // returns response
          .then(response => response.data)                                      // t response, r user
          .then(user => user.password)                                          // t user, r password
          .then(                                                                // t bool, r user
            authenticated =>
              authenticated ?
                $log.debug('User Authenticated')
                : undefined                                                     // return user (undefined)
          )
          .then(user => this.currentUser = user);

        $log.debug(this.currentUser);

    this.logout = () => this.currentUser = undefined;

    this.isLoggedIn = () => this.currentUser !== undefined;


    }

})();
