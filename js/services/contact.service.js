let ContactService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/recipes';

  this.newNote = newNote;

  function Note (recipe) {
    console.log(recipe);
    this.name = recipe.name;
    this.comments = recipe.comments;
  
  }

  function newNote (recipe) {
    let n = new Note(recipe);
    return $http.post(url, n, PARSE.CONFIG);
  }

};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;