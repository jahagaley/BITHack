var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    
    
    
    $scope.login=function(user){
        
         $http.post('/careerconnect',$scope.user).success(function(response){
    
             console.log(response);
             if(response!=null){
              console.log(response._id);   
             }
             
});
        
        
    };
    
}]);