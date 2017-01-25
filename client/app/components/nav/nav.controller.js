angular
  .module('app')
  .controller('NavController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
      //  vm.currentNavItem = 'page1';
    }

  })
