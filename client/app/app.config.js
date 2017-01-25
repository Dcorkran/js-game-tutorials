(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    console.log('setting up routes');

    // this line is optional
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        template: `
        <home-component layout="row" ng-cloak></home-component>
        `
      });
      $urlRouterProvider.otherwise('/')
  }

}());
