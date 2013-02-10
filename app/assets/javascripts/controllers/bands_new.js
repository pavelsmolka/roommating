App.BandsNewController = Ember.Controller.extend({
    cancel: function() {
        this.transitionTo('bands');
    },

    save: function() {
        App.Band.createRecord(this);
        this.get('store').commit();

        this.set('name');
        this.set('description');
        this.transitionTo('bands');
    }
});