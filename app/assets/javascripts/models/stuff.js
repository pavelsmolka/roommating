Roommating.Stuff = DS.Model.extend({
  note: DS.attr('string'),
  price: DS.attr('number'),
  commodity: DS.attr('references'),
  mate: DS.attr('references')
});