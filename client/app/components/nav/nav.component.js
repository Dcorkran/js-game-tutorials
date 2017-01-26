(function() {
  'use strict'

  angular.module ('app')
    .component('navComponent',{
      controller:'NavController',
      bindings: {
        title: '<',
        tags: '<',
        summary: '<'
      },
      templateUrl:'./app/components/nav/nav.template.html'
    });

}());
