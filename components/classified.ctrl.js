'use strict';

(function () {
	angular.module("myApp")
		.controller("myCtrl", function($scope, $http, myFactory, $mdSidenav){
			$scope.message = "hello world"
			var contact= { 
				"name":"John Doe",
      			"phone":"(555) 555-5555",
      			"email":"johndoe@gmail.com"
			}
			myFactory.getData().then(function(res){
					$scope.classifieds = res.data
					})
			$scope.openSidebar = function(){
				$mdSidenav('left').open()
			}
			$scope.closeSidebar = function(){
				console.log("	close clocked")
				$mdSidenav('left').close()
			}
			$scope.editClassified = function(classified){
				console.log(classified)
				$scope.openSidebar()
				$scope.editing = true
				$scope.classified = classified
			}

			$scope.saveClassified = function(classified){
				if(classified.title != null || classified.price != null)
				classified.contact = contact
				$scope.classifieds.push(classified)
			}
			$scope.saveEdit = function(){
				$scope.closeSidebar()
				$scope.editing = false
				$scope.classified = {}
			}
			$scope.delete = function(classified){
				var iindex = $scope.classifieds.indexOf(classified)
				if(confirm("are you sure?"))
				$scope.classifieds.splice(iindex,1)
			}
		})
})()