let SingleController = function ($scope, $stateParams, $http, PARSE, RecipeService, $state) {

  RecipeService.getSingleRecipe($stateParams.recipeId).then( (res) => {
    $scope.singleRecipeDetails = res.data;
  });

  $scope.delete = function (obj) {
    let reply = confirm('Please Confirm' + obj.Name + ' Will Be Permanently Deleted');
    if (reply) {  
      RecipeService.delete(obj).then( (res) => {
        alert ('Recipe Permanently Deleted');
        $state.go('root.recipe');

      });
    } else {
        alert ('Not Deleted');
    }  
  };
}; 

 SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE', 'RecipeService', '$state'];

export default SingleController;


 