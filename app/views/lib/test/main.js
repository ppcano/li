

App.TestRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('test');
  },
  afterModel: function() {
    this.transitionTo('test.result', 1);
  }

});

// TODO: ember-jj-abrams does not support namespace convention
// App.TestResultRoute
// Find the reason App.TestRoute is correctly resolved and a Nested Route
// isn't

define("app/routes/test/result",
["exports"],
function(__exports__) {
"use strict";


    var Route = Ember.Route.extend({

      model: function() {
        return this.store.find('test', 1694283);
      }

    });


__exports__["default"] = Route;
});


App.Router.map(function () {

  this.resource('test', { path: '/' }, function() {
    this.route('result', { path: ':id' });
  });

});

App.Router.reopen({
  location: 'none'
});
