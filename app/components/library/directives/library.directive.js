function setEqualHeight(columns){
    columns.height("auto");
    var tallestcolumn = 0;
    columns.each(function(){
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn){
             tallestcolumn  = currentHeight;
        }
    });
    columns.height(tallestcolumn);
}
$( window ).resize(function() {
    setEqualHeight($(".shows--item"));
});
$(document).ready(function () {
    setEqualHeight($(".shows--item"));
});

app.directive('moviesLibrary', function() {
  return{
      restrict: 'E',
      templateUrl: 'components/library/views/library.template.html',
      controller:   function($scope, movies) {
                      movies
                          .then(function(data){
                            $scope.movies = data;
                            $scope.number = 4;
                            $scope.loadmore = function(){
                                $scope.number += 4;
                                setEqualHeight($(".shows--item"));
                            }
                          })
                          .catch(function(err){
                            return err;
                          });
                    },
      controllerAs : 'movie'
  }
});

