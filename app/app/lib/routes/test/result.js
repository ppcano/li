
var Route = Em.Route.extend({

  model: function(params) {
    return this.store.find('test', params.id);
  }

});


export default Route;
