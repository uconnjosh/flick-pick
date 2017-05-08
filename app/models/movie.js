import DS from 'ember-data';

var Movie = DS.Model.extend({
  title: DS.attr('string'),
  rating: DS.attr('string'),
  poster: DS.attr('string')
});

export default Movie;

