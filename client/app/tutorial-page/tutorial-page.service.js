angular
  .module('app')
  .service('TutorialService',function($http){

    this.getTutorial = function(){
      return $http.get('http://localhost:5000/api/v1/tutorial/rock-paper-scissors')
    };

  });
