export default {
  name: 'setup-store',

  initialize: function(container, application) {
    

    // is it automatically loaded by ember-data?
    
    //import initializeTransforms from 'ember-data/lib/initializers/transforms';
    //import initializeStoreInjections from 'ember-data/lib/initializers/store_injections';
    //initializeTransforms(container, application);
    //initializeStoreInjections(container, application);
    //container.register('store:main', DS.Store);

    container.register('adapter:application', DS.FixtureAdapter);

  }
};
