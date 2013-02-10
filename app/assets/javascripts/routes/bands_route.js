App.BandsIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Band.find();
    },

    renderTemplate : function(){
        this.render('bands/index',{
            into:'application'
        });
    }
});
