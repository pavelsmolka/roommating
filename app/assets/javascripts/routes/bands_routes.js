/**
 * All routes for Bands resource belong here
 */

/**
 * Index route for Bands. What I think is going on here: The router creates
 * the instance of Bands(Index)Controller and fills it with the array of
 * Band objects, retrieved from the server (using find() method).
 *
 * Also, the Route is responsible for the events triggered within the
 * index view. It means especially clicking on "edit" button
 *
 * @type {*}
 */
App.BandsIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Band.find();
    },

    events: {
        edit: function(band) {
            this.transitionTo('band.edit', band);
        }
    }
});

App.BandEditRoute = Ember.Route.extend({
//    // work with the model as if it was band, not band.edit
//    // details: http://stackoverflow.com/questions/14800362/pass-content-to-the-inner-view-outlet/14800661
//    model: function(params) {
//        return this.modelFor('band');
//    },

    // temporary fix since this bug gets fixed:
    // https://github.com/emberjs/ember.js/issues/2026
    setupController: function(controller) {
        var model = this.modelFor('band');
        controller.set("model", model);
        if (!controller.get('isEditing')) {
            controller.startEditing();
        }
    }
});