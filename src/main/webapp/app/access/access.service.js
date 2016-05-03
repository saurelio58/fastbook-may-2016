'use strict';

(() => {
  angular
    .module('fastbook.access')
    .service('accessService', AccessService);

    AccessService.$inject = ['bcrypt', '$http'];

    function AccessService(bcrypt, $http) {
      this.currentUser;

      this.register = (user) => {

        return $http
          .post('./api/users', user)
          .then(response => response.data)
          .then(user => this.currentUser = user);
        };

      this.login = credentials =>
        $http
          .get('./api/users/' + credentials.username)                             // returns response
          .then(response => response.data)                                        // t response, r user
          .then(user => user.password)                                            // t user, r password
          .then(password => bcrypt.compareSync(credentials.password, password))   // t password, r bool
          .then(user => this.currentUser = user);

    this.logout = () => this.currentUser = undefined;

    this.isLoggedIn = () => this.currentUser !== undefined;


    }

})();
