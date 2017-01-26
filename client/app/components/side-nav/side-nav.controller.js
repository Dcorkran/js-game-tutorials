angular
  .module('app')
  .controller('SideNavController',function(TutorialService,$stateParams){
    const vm = this;
    console.log($stateParams);
    vm.$onInit = function(){
      vm.isSelected = $stateParams.name;
      console.log(vm.isSelected);
    },
    vm.changeSelected = function(name){
      TutorialService.changeSelected(name);
    };

  })
