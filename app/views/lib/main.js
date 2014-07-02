import 'ember';
import 'ember-data/lib/main';
import App from 'app/system/application';


App.initializeModule('views/initializers/application/load_fixtures');
App.initializeModule('views/initializers/application/setup_store');

Ember.ENV.LOG_MODULE_RESOLVER = false;
window.App = App.create({

  //router: false,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  //LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: false
  
});



