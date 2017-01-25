angular
  .module('app')
  .controller('TutorialPageController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
      //  vm.currentNavItem = 'page1';
    }

  })
