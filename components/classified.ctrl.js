(function () {
	angular.module("myApp")
		.controller("myCtrl", function($scope){
			$scope.message = "hello world"
			$scope.name= {
				first: "hiba",
				last: "akroush"
			}
		})
})()