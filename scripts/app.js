var myApp = angular.module("myApp", ['ngMaterial', 'ui.router'])

myApp.config(function($stateProvider, $mdThemingProvider){
  console.log(":")
  var home = {
    name : 'home',
    url : '/',
    templateUrl : 'home.html'
  }
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>page 1 template</h3>'
  }
  
  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>page 2 template</h3>'
  }


  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(home);

  $mdThemingProvider.theme('default')
  .primaryPalette("teal")
  .accentPalette('orange')
})

myApp.directive("helloWorld", function () {
	return {
		template: "<h1>{{message}}</h1>"
	}
})


