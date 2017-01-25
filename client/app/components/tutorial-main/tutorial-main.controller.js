angular
  .module('app')
  .controller('TutorialMainController',function($http){
    const vm = this;

    vm.$onInit = function(){
      $http.get('http://localhost:5000/api/v1/tutorial/rock-paper-scissors')
      .then((tutorial)=>{
        console.log(tutorial.data);
      });
    };

  });
