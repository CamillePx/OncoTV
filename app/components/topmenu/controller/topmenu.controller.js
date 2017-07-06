app.controller('menuController', ['$scope', function($scope) {
    $scope.sidenavOpen = false;
    $scope.openSidenav = function(){
        if($scope.sidenavOpen){
            $scope.sidenavOpen = false;
        } else{
            $scope.sidenavOpen = true;            
        }
    }
}]);
