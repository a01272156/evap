import DS from 'ember-data';

export default DS.Model.extend({
  duracion: DS.attr('number'),
  vpn: DS.attr('string'),
  recuperacion: DS.attr(''),
});
