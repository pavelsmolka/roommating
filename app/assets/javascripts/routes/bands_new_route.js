App.BandsNewRoute = Ember.Route.extend({
    renderTemplate : function(){
        this.render('bands/new',{
            into:'application'
        });
    }
});
