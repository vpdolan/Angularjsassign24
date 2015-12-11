let RecipeService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/recipes';
  //View of Existing Recipe List
  this.getRecipeList = function () {     
    return $http({
      url : url,
      headers : PARSE.CONFIG.headers,
      method : 'GET',
      cache : true
    });
  };
  //View of Single Existing Recipe
  this.getSingleRecipe = function (recipeId) {     
    return $http({
      url     : url + '/' + recipeId,
      method  : 'GET',
      headers : PARSE.CONFIG.headers,
      cache   : true
    });
    
  };
  //Adding a New Recipe 
  let MyParseDataConstructor = function (obj) {
    this.name = obj.name;
    this.url = obj.url;
    this.ingredients = obj.ingredients;
    this.description = obj.description;
    this.author = obj.author;
  };
  

  this.addNewRecipe = function (obj) {
    let temp = new MyParseDataConstructor(obj);
    return $http.post(url, temp, PARSE.CONFIG);
  };
  //Editing and Deleting an Existing Recipe
  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

RecipeService.$inject = ['$http', 'PARSE'];

export default RecipeService;


