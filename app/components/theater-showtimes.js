import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  movies: Ember.computed('showtimes', function() {
    let that = this;
    let showtimes = this.get('showtimes')
    let movieIds = Object.keys(showtimes)

    return movieIds.map(function(mId) {
      let movieModel = that.get('store').peekRecord('movie', mId);
      let movObj = {};

      movObj['movie'] = movieModel;
      movObj['showtimes'] = showtimes[mId];

      return movObj;
    })
  })
});
