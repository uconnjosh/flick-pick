import DS from 'ember-data';

var Theater = DS.Model.extend({
  name: DS.attr('string'),
  showtimes: DS.attr(),
  upName: Ember.computed('name', function() {
    return this.get('name').toUpperCase()
  })
});

export default Theater;

