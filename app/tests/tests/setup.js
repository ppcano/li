// For integration Tests, we should define a different setup
// check ember-app as example

require('ember');
require('ember-data/lib/main');
require('ember-qunit/main').globalize();
require('ember-qunit-utils');


var AppResolver = require('app/system/resolver')['default'];

Ember.ENV.LOG_MODULE_RESOLVER = false;
Ember.setupForTesting();
var resolver = AppResolver.create({
  namespace: { modulePrefix: 'app' }
});

setResolver(resolver);
