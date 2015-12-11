let SubmissionsService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/recipes';

  this.getEntries = getEntries;

  function getEntries () {
    return $http.get(url, PARSE.CONFIG);
  }

};

SubmissionsService.$inject = ['$http', 'PARSE'];

export default SubmissionsService;