'use strict';

(function () {
	angular.module("myApp")
		.controller("myCtrl", function($scope){
			$scope.message = "hello world"
			$scope.classified= [{
				title: "first item",
				price: "7675"
			},
			{
				title: " item",
				price: "775"
			},
			{
				title: "first ",
				price: "7675"
			},
			{
				title: "first d item",
				price: "675"
			},
			{
				title: "firsta item",
				price: "76aa75"
			},
			{
				title: "ft item",
				price: "7ddd675"
			}]
		})
})()