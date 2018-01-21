define(['../components/classifiedCtrl'],
  function (classifiedCtrl) {
  var myApp = angular.module("myApp", ['ngMaterial', 'ui.router'])
  myApp.controller('classifiedCtrl', classifiedCtrl)

  } 


)

