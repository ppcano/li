
var Serializer = require('app/data/serializer')['default'];
var Adapter = require('app/data/adapter')['default'];
var Store = require('app/data/store')['default'];


var resolver = require('ember-qunit/test-resolver').get();

var store;

module('Find Results', {
    setup: function() {

      var container = new Ember.Container();


      //container.register('model:test', require('app/models/test')['default']);
      container.register('model:test', resolver.resolve('model:test'));

      container.register('store:main', Store);
      container.register('serializer:-app', Serializer);
      container.register('adapter:application', Adapter.extend({
        auth: testUtils.authKey
      }));

      store = container.lookup('store:main');

    },
    teardown: function() {
    }
});


test('can findResults and deserialize properties', function() {

  expect(3);

  stop();
  store.find('test').then(function(tests) {
    
    
    ok(tests.get('length') > 0 , 'has real tests');

    var id = tests.get('firstObject.id');

    store.findResults(id).then(function(result){

      ok(result.clientsActive.length > 0);
      ok(result.userLoadTime.length > 0);

      start();

    });

  });

});
