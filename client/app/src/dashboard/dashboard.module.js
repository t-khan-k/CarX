'use strict';

require('./dashboard.scss');

var name = module.exports = 'car-x.dashboard';

angular
  .module(name, [])
  .config(configuration)
  .controller('DashboardCtrl', require('./dashboard.controller.js'))
;

function configuration($stateProvider) {
  $stateProvider
    .state('Dashboard', {
      url: '/dashboard',
      template: require('./dashboard.html'),
      controller: 'DashboardCtrl as vm',
      title: 'Dashboard Page'
    });

}
