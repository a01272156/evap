import Ember from 'ember';

export default Ember.Controller.extend({
  criterios:
  Ember.computed('model.[]', function () {
    return this.get('store').findAll('proyecto');
  })
});
