angular.module("mainModule", [])
  .controller("TodoCtrl", function ($scope)
    {
            $scope.total = function () { 
              check();
              return  parseInt($scope.mechanics) + parseInt($scope.graphics) + parseInt($scope.maths);    
            };

            $scope.subjects = [{}];
    
       
    
    
  
            $scope.addmarks = function () {  
                $scope.subjects.push({
                    mechanics: $scope.mechanics,
                    graphics: $scope.graphics,
                    maths: $scope.maths
            });
                    $scope.mechanics = '';
                    $scope.graphics = '';
                    $scope.maths = '';
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