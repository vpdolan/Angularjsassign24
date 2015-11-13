let AddController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/recipes';

  let recipe =  function (obj) {
    this.recipe = obj.recipe;
    this.author = obj.author;
    this.ingredients = obj.ingredients;
    this.instructions = obj.instructions;
    this.url = obj.url;
  };

  $scope.addRecipe = (obj) => {

    let r = new Recipe(obj);
      console.log(addRecipe);

    $http.post(url, r, PARSE.CONFIG).then( (res) => {
      $scope.recipe = {};

    });

  };
};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController; 