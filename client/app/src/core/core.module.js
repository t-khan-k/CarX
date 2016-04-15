'use strict';

require('./core.scss');

var name = module.exports = 'car-x.core';

angular
  .module(name, [
    require('angular-ui-router'),
    require('angular-material')
  ])
  .config(require('./router.config.js'))
  .run(require('./router.run.js'))
;






