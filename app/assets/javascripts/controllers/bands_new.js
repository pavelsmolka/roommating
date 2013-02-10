App.BandsNewController = Ember.Controller.extend({
    cancel: function() {
        this.cleanAndRedirect();
    },

    save: function() {
        App.Band.createRecord(this);
        this.get('store').commit();
        this.cleanAndRedirect();
    },

    cleanAndRedirect: function() {
        this.set('name');
        this.set('description');
        this.transitionTo('bands');
    }
});