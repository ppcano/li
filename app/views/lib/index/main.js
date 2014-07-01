

App.IndexController = Em.Controller.extend({
  text: 'hola hola!!!'
});


App.IndexRoute = Ember.Route.extend({

  model: function() {

  },
  afterModel: function(model) {

  }
});


App.Router.map(function () {
  this.resource('index', { path: '/' });
});
