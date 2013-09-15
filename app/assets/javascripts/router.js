App.Router.map(function () {
    this.resource('bands', function () {
        this.route('new');
        this.resource('band', {path: ':band_id'}, function() {
            this.route('edit');
        });
    });
});
