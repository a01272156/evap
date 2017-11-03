import DS from 'ember-data';

export default DS.Model.extend({
  duracion: DS.attr(''),
  vpn: DS.attr(''),
  recuperacion: DS.attr(''),
});
