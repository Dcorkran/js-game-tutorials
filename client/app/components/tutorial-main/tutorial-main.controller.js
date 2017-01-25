angular
  .module('app')
  .controller('TutorialMainController',function($http,$sce){
    const vm = this;

    vm.$onInit = function(){
      $http.get('http://localhost:5000/api/v1/tutorial/rock-paper-scissors')
      .then((tutorial)=>{
        vm.tutorialHTML = $sce.trustAsHtml(tutorial.data);
        console.log(tutorial.data);
        console.log(vm.tutorialHTML);

      });
    };

  });
