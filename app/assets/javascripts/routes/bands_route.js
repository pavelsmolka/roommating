App.BandsRoute = Ember.Route.extend({
  model: function() {
    return App.Band.find();
  }
});
