App.BandsNewController = Em.ArrayController.extend({
    cancel: function() {
        this.transitionTo('bands.index');
    },

    save: function() {
        App.Band.createRecord(this);
        this.get('store').commit();

        this.set('name');
        this.set('description');
        this.transitionTo('bands.list');
    }
});