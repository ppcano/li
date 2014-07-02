
var Route = Em.Route.extend({

  model: function(params) {
    return this.store.findResults(params.id);
  }

});


export default Route;
