angular
  .module('app')
  .controller('TutorialPageController',function($sce,TutorialService){
    const vm = this;

    vm.$onInit = function(){
      TutorialService.getTutorial()
      .then((tutorial)=>{
        vm.tutorial = tutorial.data
        vm.tutorialHTML = $sce.trustAsHtml(tutorial.data.content);
        console.log(tutorial.data);

      });
      //  vm.currentNavItem = 'page1';
    }

  })
