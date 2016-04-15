'use strict';

require('./create-route.scss');

var name = module.exports = 'car-x.createRoute';

angular
  .module(name, [
  ])
  .config(configuration)
  .controller('CreateRouteCtrl', require('./create-route.controller.js'))
;

function configuration($stateProvider) {
  $stateProvider
    .state('Shell.CreateRoute', {
      url: '/route',
      views: {
        'content@Shell': {
          template: require('./create-route.html'),
          controller: 'CreateRouteCtrl as vm'
        }
      },
      title: 'Create Route Page'
    });

}
