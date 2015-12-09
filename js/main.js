import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import config from './config';

import AddController from './controllers/add.controller';
import EditController from './controllers/edit.controller';
import SingleController from './controllers/single.controller';
import ContactController from './controllers/contact.controller';
import AboutController from './controllers/about.controller';
import RecipeController from './controllers/recipe.controller';
import LoginController from './controllers/login.controller';
import HomeController from './controllers.home.controller';



import RecipeService from './services/recipe.service'; 
import UserService from './services/user.service';



angular
  .module('app', ['ui.router', 'ngCookies'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'myyTda0UsHKGdK768BddXpjlxSBhK0on9AnKKPcA',
        'X-Parse-REST-API-Key': '9guoOim0om0wtLJkyl7QH6CO9D3cZ2Oz7gH7ZZIm'
      }

    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('EditController', EditController)
  .controller('SingleController', SingleController)
  .controller('RecipeController', RecipeController)
  .controller('ContactController', ContactController)
  .controller('AboutController', AboutController)
  .controller('LoginController', LoginController)
  .controller('HomeController', HomeController)
  .service('RecipeService', RecipeService)
  .service('UserService', UserService)
  ;
