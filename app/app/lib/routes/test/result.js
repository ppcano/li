
var Route = Em.Route.extend({

  model: function(params) {
    return this.store.findResults(params.id);
  },

  actions: {

    closeChart: function() {

      this.transitionTo('test');

    }

  }

});


export default Route;
