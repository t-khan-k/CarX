'use strict';

require('./shell.scss');

var name = module.exports = 'car-x.shell';

angular
  .module(name, [
  ])
  .config(configuration)
  .controller('ShellCtrl', require('./shell.controller.js'))
;

function configuration($stateProvider) {
  $stateProvider
    .state('Shell', {
      abstract: true,
      controller: 'ShellCtrl as vm',
      views:{
        "@": {
          template: require('./shell.html')
        },
        "header@Shell": {
          template: require('./header.html')
        },
        "left@Shell": {
          template: require('./left.html')
        },
        "right@Shell": {
          template: require('./right.html')
        }
      },
      title: 'Dashboard Page'
    });

}
