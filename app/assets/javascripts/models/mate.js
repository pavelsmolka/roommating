Roommating.Mate = DS.Model.extend({
  name: DS.attr('string'),
  user: DS.attr('references')
});