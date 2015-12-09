let AddController = function ($scope, RecipeService) {

  $scope.addRecipe = (obj) => {
    console.log(obj);

    RecipeService.addNewRecipe(obj).then ((res) =>{$scope.recipe = {};

    });

  };  
};

AddController.$inject = ['$scope', 'RecipeService'];

export default AddController; 