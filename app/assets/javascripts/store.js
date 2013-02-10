App.RESTSerializer = DS.RESTSerializer.extend({
  init: function() {
    this._super();
    this.map('App.Band');
  }
});

App.Adapter = DS.RESTAdapter.extend({
  serializer: App.RESTSerializer.create()
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: App.Adapter.create()
});
