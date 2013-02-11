/**
 * All routes for Bands resource belong here
 */

/**
 * Index route for Bands. What I think is going on here: The router creates
 * the instance of Bands(Index)Controller and fills it with the array of
 * Band objects, retrieved from the server (using find() method).
 *
 * @type {*}
 */
App.BandsIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Band.find();
    }
});