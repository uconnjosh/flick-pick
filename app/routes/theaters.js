import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      theaters: this.store.findAll('theater'),
      movies: this.store.findAll('movie'),
    });
  }
})
