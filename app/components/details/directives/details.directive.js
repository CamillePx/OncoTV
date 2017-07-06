app.directive('moviesDetails', function() {
  return{
      restrict: 'E',
      templateUrl: 'components/details/views/details.template.html',
      controller:   function($scope, movies, $routeParams) {
                      movies
                          .then(function(data) {
                        $scope.detail = data.data.results[$routeParams.id];
                          var title = $scope.detail.title;
                          var titleLow = title.toLowerCase();
                          var titleGood = titleLow.split(' ').join('+');
                          $scope.detail.url="http://lmgtfy.com/?q=" + titleGood + "+trailer";
                      })
                      .catch(function(err){
                        return err;
                      });
                    },
      controllerAs : 'details'
  }
});