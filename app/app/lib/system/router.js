
import Router from "ember-routing/system/router";

var AppRouter = Router.extend({
  //rootURL: ENV.rootURL,
  location: 'history'
});

AppRouter.map(function() {
  this.resource('test', { path: '/' }, function() {
    this.route('result', { path: ':id' });
  });
});

export default AppRouter;
