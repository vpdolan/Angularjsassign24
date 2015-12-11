let ContactController = function ($scope, PARSE,  ContactService) {

  let vm = this;
  
  vm.newNote = newNote;

  function newNote (recipe) {
    ContactService.newNote(recipe).then( (res) => {
      $scope.comments = {};
  });
 };

};


ContactController.$inject = ['$scope', 'PARSE', 'ContactService'];

export default ContactController;

  