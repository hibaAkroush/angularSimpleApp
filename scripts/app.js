angular.module("myApp",[])
		.directive("helloWorld", function () {
			return {
				template: "<h1>{{message}}</h1>"
			}
			
		})