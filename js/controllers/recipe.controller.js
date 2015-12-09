
let RecipeController = function ($scope, $http, PARSE, RecipeService) {

  RecipeService.getRecipeList().then ((res) => {
      $scope.recipes = res.data.results;
  });

};

RecipeController.$inject = ['$scope', '$http', 'PARSE', 'RecipeService'];

export default RecipeController; 
