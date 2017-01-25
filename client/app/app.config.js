(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$mdThemingProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider){
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
      })
      .state({
        name: 'tutorial',
        url: '/tutorial/:name',
        template: `
        <tutorial-page-component layout="row" ng-cloak></tutorial-page-component>
        `
      }),
    $mdThemingProvider.theme('default')
   .primaryPalette('teal', {
     'default': '400', // by default use shade 400 from the pink palette for primary intentions
     'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
     'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
     'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
   })
      $urlRouterProvider.otherwise('/')
  }

}());
