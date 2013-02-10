App.BandsIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Band.find();
    },

    renderTemplate : function(){
        this.render(null, { // render default template, i.e. bands/index
            into:'application'
        });
    }
});
