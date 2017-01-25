(function() {
  'use strict'

  angular.module ('app',['ui.router','ngMaterial'])
  .component('app',{
    template:`
        <side-nav-component></side-nav-component>
        <div>
          <nav-component></nav-component>
        </div>
    `
  });


}());
