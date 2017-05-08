import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  displayShowtimes: Ember.computed('showtimes', function() {
  	return this.sortedShowtimes()
    this.get('')
  }),
  passedShowtimes: Ember.computed('showtimes', function() {
    let showtimes = this.sortedShowtimes()

    var filtered = showtimes.filter(function(showtime) {
      let nowMoment = moment(new Date(), ['h:mm A'])
      return showtime < nowMoment
    })

    return filtered.map(function(fShowtime) {
      return fShowtime._i
    })
  }),
  futureShowtimes: Ember.computed('showtimes', function() {
    let showtimes = this.sortedShowtimes()

    var filtered = showtimes.filter(function(showtime) {
      let nowMoment = moment(new Date(), ['h:mm A'])
      return showtime > nowMoment
    })

    return filtered.map(function(fShowtime) {
      return fShowtime._i
    })
  }),
  momentShowtimes: function() {
    return this.get('showtimes').map(function(showtime) {
      return moment(showtime, ['h:mm A'])
    })
  },
  sortedShowtimes: function() {
    return this.momentShowtimes().sort(function(time1, time2) {
      return time1 - time2
    });
  }
});
