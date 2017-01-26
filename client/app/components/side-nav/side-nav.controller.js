angular
  .module('app')
  .controller('SideNavController',function(TutorialService){
    const vm = this;

    vm.$onInit = function(){
      vm.isSelected = TutorialService.isSelected;
    },
    vm.changeSelected = function(name){
      TutorialService.changeSelected(name);
    };

  })
