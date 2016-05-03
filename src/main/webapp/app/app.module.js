'use strict';

(() => {
  angular
    .module('fastbook',
    [
      'ngMaterial',
      'ui.router',
      'dtrw.bcrypt',
      'fastbook.user',
      'fastbook.access',
      'fastbook.friend'
    ])

})();
