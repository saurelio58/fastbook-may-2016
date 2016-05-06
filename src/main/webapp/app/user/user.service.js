'use strict';

(() => {
  angular
    .module('fastbook.user')
    .service('userService', UserService);

  UserService.$inject = ['$http', '$log', 'accessService'];

  function UserService($http, $log, accessService) {

    this.listOfUsers;
    this.profileUser;
    this.post;
    this.currentUser = accessService;


    this.setProfileUser = (user) => {
      $log.debug(user);
      this.profileUser = user;
      $log.debug('Profile user: ' + this.profileUser)
      $log.debug('Last Name: ' + this.profileUser.lastName)
    }

    this.getAllUsers = function() {
      return $http
        .get('./api/users/')
        .then(response => response.data);
    };

    this.getUsersByName = function(name) {
      return $http
        .get('./api/users/find/' + name)
        .then(response =>{
          $log.debug(response);
          return response.data;
        });
      };

    this.getUserById = function(id) {
      return $http
        .get('./api/users/' + id)
        .then(response => response.data)
    };

    this.getUserFriends = function(id) {
          return $http
            .get('./api/users/' + id + '/friends')
            .then(response => response.data)
        };

    this.getFriendRequestOnProfile = function(id, loggedInUserId) {
      return $http
        .get('./api/users/' + id + '/getRequest/' + loggedInUserId)
        .then(response => response.data)
    };

    this.sendFriendRequest = function(id, loggedInUser) {
      return $http
        .put('./api/users/' + id + '/addRequest', loggedInUser)
        .then(response => response.data)
    };

    this.acceptFriendRequestOnProfile = function(id, friendRequest) {
      return $http
        .patch('./api/users/' + id + '/acceptRequest', friendRequest)
        .then(response => response.data)
    };

    this.deleteFriendRequestOnProfile = function(id, loggedInUserId) {
      return $http
        .delete('./api/users/' + id + '/denyRequest/' + loggedInUserId)
        .then(response => response.data)
    };

    this.getUsersFriends = function(id) {
      return $http
        .get('./api/users/' + id)
        .then(response => response.data)
    };

    this.getUsersPosts = (userId) =>{
      return $http
        .get('./api/posts/user/' + userId)
        .then(response =>{
          $log.debug(response.data);
          return response.data;
        });
      }

    this.postToUserTimeline = (post,loggedInUser) =>{

      return $http
        .post('./api/posts/user/' + loggedInUser.id, post)
        .then(response => response.data)
    }


  }
})();
