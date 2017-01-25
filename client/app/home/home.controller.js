angular
  .module('app')
  .controller('HomeController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
      //  vm.currentNavItem = 'page1';
    }

  })
