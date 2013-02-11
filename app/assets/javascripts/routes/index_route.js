/**
 * Index route for whole app. This specifies what happens at '/'
 */
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('bands');
  }
});
