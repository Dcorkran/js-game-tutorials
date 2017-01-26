angular
  .module('app')
  .controller('TutorialPageController',function($sce,TutorialService, $stateParams){
    const vm = this;

    vm.$onInit = function(){
      console.log($stateParams.name);
      TutorialService.getTutorial($stateParams.name)
      .then((tutorial)=>{
        vm.tutorial = tutorial.data
        vm.tutorialHTML = $sce.trustAsHtml(tutorial.data.content);
        console.log(tutorial.data);

      });
      //  vm.currentNavItem = 'page1';
    }

  })
