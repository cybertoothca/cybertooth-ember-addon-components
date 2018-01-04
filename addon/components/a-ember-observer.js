import Ember from 'ember';
import layout from '../templates/components/a-ember-observer';

export default Ember.Component.extend({
  attributeBindings: ['href', 'target'],
  href: Ember.computed('packageName', function () {
    return `http://emberobserver.com/addons/${this.get('packageName')}`
  }),
  layout,
  /**
   * REQUIRED.
   * e.g. ember-helper-locale-date
   */
  packageName: undefined,
  tagName: 'a',
  target: '_blank'
});
