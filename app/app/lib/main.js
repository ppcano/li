
import 'ember';
import 'ember-data/lib/main';
import App from 'app/system/application';
import Router from 'app/system/router';

App.initializeAll();


Ember.ENV.LOG_MODULE_RESOLVER = false;
window.App = App.create({

  LOG_ACTIVE_GENERATION: false,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  //LOG_VIEW_LOOKUPS: true,
  
  Router: Router
});
