var myApp = angular.module("myApp", ['ngMaterial', 'ui.router'])

myApp.config(function($stateProvider, $mdThemingProvider){
  console.log(":")
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }
  
  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }


  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  $mdThemingProvider.theme('default')
  .primaryPalette("teal")
  .accentPalette('orange')
})

myApp.directive("helloWorld", function () {
	return {
		template: "<h1>{{message}}</h1>"
	}
})


