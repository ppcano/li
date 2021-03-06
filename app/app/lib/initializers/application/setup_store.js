import Serializer from 'app/data/serializer';
import Adapter from 'app/data/adapter';
import Store from 'app/data/store';


export default {
  name: 'setup-store',
  before: 'ember-data',

  initialize: function(container, application) {
    
    container.register('serializer:-app', Serializer);
    // TODO: load `auth` key via a config object registered into the container
    // which could be injected in specific app components
    
    container.register('adapter:-app', Adapter.extend({
      auth: '738671a13fe3a67ffbe6fd904177608ea037aaafb81b4e0debfd49f55069f6c5:'
    }));
    
    container.register('store:application', Store);

  }
};
