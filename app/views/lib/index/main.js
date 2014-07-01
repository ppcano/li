

App.IndexController = Em.Controller.extend({
});


App.IndexRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('test');
  },

  afterModel: function(model) {

  }

});


App.Router.map(function () {
  this.resource('index', { path: '/' });
});
