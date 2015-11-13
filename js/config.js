let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html'

    })

    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })

    .state('root.recipe', {
      url: '/recipes',
      controller: 'RecipeController',
      templateUrl: 'templates/recipe.tpl.html'

    })

    .state('root.single', {
      url: '/single/:recipeId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })

    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })

    .state('root.contact', {
      url: '/contact',
      controller: 'ContactController',
      templateUrl: 'templates/contact.tpl.html'
    })

    .state('root.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'templates/login.tpl.html'
    })

};


config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;