let RecipeService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/recipes';

  this.getRecipeList = function () {     
    return $http({
      url : url,
      headers : PARSE.CONFIG.headers,
      method : 'GET',
      cache : true
    });
  };

  this.getSingleRecipe = function (recipeId) {     
    return $http({
      url     : url + '/' + recipeId,
      method  : 'GET',
      headers : PARSE.CONFIG.headers,
      cache   : true
    });
    
  };

  let MyParseDataConstructor = function (obj) {
    this.Name = obj.name;
    this.Url = obj.url;
    this.Ingredients = obj.ingredients;
    this.Description = obj.description;
    this.Author = obj.author;
  };
  

  this.addNewRecipe = function (obj) {
    let temp = new MyParseDataConstructor(obj);
    return $http.post(url, temp, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

RecipeService.$inject = ['$http', 'PARSE'];

export default RecipeService;


