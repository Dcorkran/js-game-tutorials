angular
  .module('app')
  .controller('NavController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
       vm.title = 'Welcome';
       vm.summary = 'This is going to be the placeholder summary. Please read it because it is so intersting'
    }

  })
