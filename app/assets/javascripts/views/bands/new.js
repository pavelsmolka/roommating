App.BandsNewView = Ember.View.extend({
    templateName:    'bands/new',
    didInsertElement: function() {
        this.$('input:first').focus();
    }
});
