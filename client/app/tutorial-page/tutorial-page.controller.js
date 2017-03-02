angular
  .module('app')
  .controller('TutorialPageController',function($timeout,$scope,$sce,TutorialService, $stateParams){
    const vm = this;
    vm.$onInit = function(){
      TutorialService.getTutorial($stateParams.name)
      .then((tutorial)=>{
        vm.tutorial = tutorial.data
        vm.tutorialHTML = $sce.trustAsHtml(tutorial.data.content);
        $timeout(()=>{
          let aCodes = document.getElementsByTagName('code');
            for (var i=0; i < aCodes.length; i++) {
              hljs.highlightBlock(aCodes[i]);
            }
        },2000);
      });
    };
  });
