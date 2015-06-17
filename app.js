function carHireController($scope, $http) {

    $http.get('catalog.json').success(function(data) {
        $scope.results = data.results;
    }).error(function(data, status, headers, config) {
	console.log('error');
  });

}
