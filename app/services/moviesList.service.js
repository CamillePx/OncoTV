app.factory('movies', function($http){
  return $http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=82aaab69030f15836fc196eb07b4da1d')
  .then(function(data){
    return data;
  })
  .catch(function(err){
    return err;
  });
});