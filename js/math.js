var pr = angular.module("mainModule", [])
pr.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mechanical', {
        templateUrl: 'templates/mechanical.html',
        controller: 'TodoCtrl'
    }).
      when('/computerscience', {
        templateUrl: 'templates/cse.html',
        controller: 'TodoCtrl'
      }).
       when('/civil', {
        templateUrl: 'templates/civil.html',
        controller: 'TodoCtrl'
      }).
        when('/electronics', {
        templateUrl: 'templates/electronics.html',
        controller: 'TodoCtrl'
      }).
      otherwise({
        redirectTo: '/mechanical'
      });
}])
  pr.controller("TodoCtrl", function ($scope)
    {
            $scope.total = function () { 
              check();
              return  parseInt($scope.mechanics) + parseInt($scope.graphics) + parseInt($scope.maths);    
            };

            $scope.subjects = [{}];
            $scope.addMarks = function () {  
                $scope.subjects.push({
                    sub_mechanics: $scope.mechanics,
                    sub_graphics: $scope.graphics,
                    sub_maths: $scope.maths,
                    selected_student: $scope.selectedstudent,
                    selected_number: $scope.studentnumber
            });
                    $scope.mechanics = '';
                    $scope.graphics = '';
                    $scope.maths = '';
                    $scope.studentnumber = '';
                    $scope.selectedstudent = '';
            }



            function check(){
              var value = document.getElementById('value').value;

               if ((value > 250.0) && (value <= 300.0)) {
                    $scope.grade = 'A'
                    $scope.result = 'PASS'
     
                } 
                else if ((value > 150.0)  && (value <= 250.0)) {
                   $scope.grade = 'B'
                   $scope.result = 'PASS'
     
                } 
                else if ((value > 100.0)  && (value <= 150.0)) {
                  $scope.grade = 'C'
                  $scope.result = 'PASS'
                }
                else if ((value > 0)  && (value <= 100.00)) {
                  $scope.grade = 'E'
                  $scope.result = 'FAIL'
                }
                else {
                  $scope.grade = ''
                  $scope.result = ''
               }
               
            }

  });