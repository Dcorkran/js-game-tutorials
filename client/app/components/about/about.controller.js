angular
  .module('app')
  .controller('AboutController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
      //  vm.currentNavItem = 'page1';
    }

  })
