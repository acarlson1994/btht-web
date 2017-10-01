import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'localhost',
  namespace: '/v1'
});