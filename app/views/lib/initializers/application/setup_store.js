export default {
  name: 'setup-store',
  before: 'ember-data',

  initialize: function(container, application) {

    container.register('adapter:application', DS.FixtureAdapter);

  }
};
