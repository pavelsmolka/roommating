App.BandsNewRoute = Ember.Route.extend({
    renderTemplate : function(){
        this.render('bands_new',{
            into:'application'
        });
    }
});
