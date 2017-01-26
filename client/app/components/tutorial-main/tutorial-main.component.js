(function() {
  'use strict'

  angular.module ('app')
    .component('tutorialMainComponent',{
      controller:'TutorialMainController',
      bindings: {
        tutorial: '<'
      },
      templateUrl:'./app/components/tutorial-main/tutorial-main.template.html'
    });

}());
