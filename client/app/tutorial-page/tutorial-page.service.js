angular
  .module('app')
  .service('TutorialService',function($http){
    this.isSelected = 'Home';
    this.getTutorial = function(name){
      return $http.get(`http://localhost:5000/api/v1/tutorial/${name}`);
    };
    this.changeSelected = function(name){
      this.isSelected = name;
    };

  });
