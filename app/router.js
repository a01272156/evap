import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('inicio', {path:'/'});
  this.route('establecimiento-de-criterios');
  this.route('nuevo-criterio');
  this.route('registro-del-proyecto');
  this.route('asignacion-de-valores');
  this.route('ponderacion');
  this.route('analisis');
});

export default Router;
