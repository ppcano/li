


App.TestRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('test');
  },

  afterModel: function() {

    // you can manipulate model data here to test
    // different scenarios

  }

});


App.Router.map(function () {
  this.resource('test', { path: '/' }, function() {
    this.route('result', { path: ':id' });
  });
});
