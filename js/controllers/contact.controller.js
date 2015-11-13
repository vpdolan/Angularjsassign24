let ContactController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/recipe';

  let Recipe =  function (obj) {
    this.name = obj.name;
    this.author = obj.author;
    this.ingredients = obj.ingredients;
    this.instructions = obj.instructions;
  };

  $scope.addRecipe = (obj) => {

    let r = new Recipe(obj);
      console.log(w);

    $http.post(url, r, PARSE.CONFIG).then( (res) => {
      $scope.recipe = {};

    });

  };
};

ContactController.$inject = ['$scope', '$http', 'PARSE'];

export default ContactController; 