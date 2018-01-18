'use strict';

(function () {
	angular.module("myApp")
		.controller("myCtrl", function($scope, $http){
			$scope.message = "hello world"

			$http.get("data/data.json").then(function(res){
				$scope.classifieds = res.data
			})
		})
})()