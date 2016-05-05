'use strict';

(() => {
  angular
    .module('fastbook',
    [
      'ngMaterial',
      'ngMessages',
      'ui.router',
      'dtrw.bcrypt',
      'fastbook.user',
      'fastbook.access',
      'fastbook.friend',
      'fastbook.group'
    ])

})();
