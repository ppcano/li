var Route = Em.Route.extend({

  model: function() {
    return this.store.find('test');
  }

});


export default Route;
