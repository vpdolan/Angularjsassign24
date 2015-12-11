import angular from 'angular';
import 'angular-ui-router';
import config from './config';

import AddController from './controllers/add.controller';
import EditController from './controllers/edit.controller';
import SingleController from './controllers/single.controller';
import ContactController from './controllers/contact.controller';
import SubmissionsController from './controllers/submissions.controller';
import AboutController from './controllers/about.controller';
import RecipeController from './controllers/recipe.controller';
import RecipeService from './services/recipe.service'; 
import ContactService from './services/contact.service';
import SubmissionsService from './services/submissions.service';


angular
  .module('app', ['ui.router'])
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
  .controller('SubmissionsController', SubmissionsController)
  .service('RecipeService', RecipeService)
  .service('ContactService', ContactService)
  .service('SubmissionsService', SubmissionsService)
  ;
