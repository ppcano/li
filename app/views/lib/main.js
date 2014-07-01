console.log('views..');

import 'ember';
import 'ember-data/lib/main';
import App from 'app/system/application';


App.initializeModule('views/initializers/application/load_fixtures');
App.initializeModule('views/initializers/application/store');

Ember.ENV.LOG_MODULE_RESOLVER = true;
window.App = App.create({

  LOG_ACTIVE_GENERATION: false,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  //LOG_VIEW_LOOKUPS: true,
  
  router: false
});
