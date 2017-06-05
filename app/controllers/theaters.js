import Ember from 'ember'

const { Controller, inject: { service }} = Ember

export default Controller.extend({
  selectedTheater: Ember.computed('model', function() {
    return this.get('model.theaters.firstObject')
  }),
  showtimes: Ember.computed('selectedTheater', function() {
    return this.get('selectedTheater.showtimes')
  }),
  actions: {
    selectTheater(theater) {
      this.set('selectedTheater', theater);
    }
  }
})
