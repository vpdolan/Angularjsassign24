console.log('Hello, World');
import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';

import ListController from './controllers/list.controller';

import SingleController from './controllers/single.controller';

import ContactController from './controllers/contact.controller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'WJbqS7RF79Y1mCdViGxV4F6kXUkhAFNYh0eCDH5I',
        'X-Parse-REST-API-Key': 'Cg9uGXVT5kTablEQgoZ69pAgOjr5QptYVWGa6hNO'
      }

    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('ContactController', ContactController)
  ;
