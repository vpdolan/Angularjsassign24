
let RecipeController = function ($scope, RecipeService) {

  RecipeService.getRecipes().then(function (res) {
      $scope.recipes = res.data.results;
  });

};

RecipeController.$inject = ['$scope', 'RecipeService'];

export default RecipeController; 

// let SingleController = function ($scope, $stateParams, RecipeService, $state) {

//   RecipeService.getRecipe($stateParams.recipeId).then( (res) => {
//     $scope.singleRecipe = res.data;
//   });

//   $scope.deleteMe = function (obj) {
//     RecipeService.delete(obj).then( (res) => {
//       console.log(res);
//       $state.go('root.list');
//     });
//   };
//  }; 

//  SingleController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

// export default SingleController;