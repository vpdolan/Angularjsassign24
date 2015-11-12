let ListController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/whiskey';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.whiskeys = res.data.results;
    
  });

};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;