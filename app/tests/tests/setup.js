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

window.testUtils = {
  authKey: '738671a13fe3a67ffbe6fd904177608ea037aaafb81b4e0debfd49f55069f6c5:'
};
