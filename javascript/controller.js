angular.module('smApp', []).controller('smCtrl', function ($scope, $http) {
    $http.get('data/menu.json').then(function(res){
                $scope.menu =  res.data;                
        });
    /*
     $http.get('data/phones.json').then(function(res){
                $scope.phones =  res.data;    
				console.log(res.data);
        });
		
		*/
});