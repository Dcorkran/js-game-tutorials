angular
  .module('app')
  .controller('NavController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
       vm.title = 'Welcome';
       vm.summary = 'Get your feet wet coding with JavaScript! The exercises on this site are designed to allow you to get started coding with minimal setup.'
    }

  })
