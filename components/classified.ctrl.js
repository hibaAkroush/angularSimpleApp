'use strict';

(function () {
	angular.module("myApp")
		.controller("myCtrl", function($scope, $http, myFactory){
			$scope.message = "hello world"
			myFactory.getData().then(function(res){
					$scope.classifieds = res.data
					})

		})
})()