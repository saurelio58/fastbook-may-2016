'use strict';

(() => {
  angular
    .module('fastbook.user')
    .service('postService', PostService);

  PostService.$inject = ['$http', '$log', 'accessService'];

  function PostService($http, $log, accessService) {

    // this.getAllUsers = function() {
    //   return $http
    //     .get('./api/posts/')
    //     .then(response => response.data);
    // };

    this.getPostsForUser = function(userId, loggedInUser) {
      return $http
        .get('./api/posts/user/getPosts/' + userId + '/' + loggedInUser)
        .then(response => {
          $log.debug('postService-getPostsForUser:');
          $log.debug(response.data);
          return response.data;
        });
    };

    this.getPostsForGroup = function(groupId) {
      return $http
        .get('./api/posts/group/' + groupId)
        .then(response => response.data)
    };

    // userId = the 'wall' that the post appears on
    // post - contains an 'author' which is a User object for the person writing the post
    this.addPostToUser = function(userId, post) {
      return $http
        .post('./api/posts/user/' + userId, post)
        .then(response => response.data)
    };

    // groupId = the 'wall' that the post appears on
    // post - contains an 'author' which is a User object for the person writing the post
    this.addPostToGroup = function(groupId, post) {
      return $http
        .post('./api/posts/group/' + groupId, post)
        .then(response => response.data)
    };


  }
})();
