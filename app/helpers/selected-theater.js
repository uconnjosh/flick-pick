import Ember from 'ember';

export function selectedTheater(params/*, hash*/) {
  if (params[0].get('name') == params[1].get('name')) {
    return 'active-theater'
  }
}

export default Ember.Helper.helper(selectedTheater);
