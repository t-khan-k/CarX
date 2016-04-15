'use strict';

require('angular');

angular.module('car-x', [
  require('./core/core.module.js'),
  require('./common/common.module.js'),
  require('./shell/shell.module.js'),
  require('./create-route/create-route.module')
]);
