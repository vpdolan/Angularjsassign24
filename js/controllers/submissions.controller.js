let SubmissionsController = function(PARSE, SubmissionsService) {

  let vm = this;

  vm.title = 'Entries';

  vm.note = getNote();

  function getNote () {
    SubmissionsService.getEntries().then( (response) => {
      vm.note = response.data.results;
    });
  }
};


SubmissionsController.$inject = ['PARSE', 'SubmissionsService'];

export default SubmissionsController;