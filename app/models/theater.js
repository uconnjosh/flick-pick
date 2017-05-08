import DS from 'ember-data';

var Theater = DS.Model.extend({
  name: DS.attr('string'),
  showtimes: DS.attr(),
  // showTimes: DS.hasMany('showTime'),
  upName: Ember.computed('name', function() {
    return this.get('name').toUpperCase()
  })
});

export default Theater;

