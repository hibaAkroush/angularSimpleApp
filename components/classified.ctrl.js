'use strict';

(function () {
	angular.module("myApp")
		.controller("myCtrl", function($scope, $http, myFactory, $mdSidenav){
			$scope.message = "hello world"
			myFactory.getData().then(function(res){
					$scope.classifieds = res.data
					})
			$scope.openSidebar = function(){
				$mdSidenav('left').open()
			}

		})
})()