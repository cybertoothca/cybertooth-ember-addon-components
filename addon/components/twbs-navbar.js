import Ember from 'ember';
import layout from '../templates/components/twbs-navbar';

export default Ember.Component.extend({
  classNames: ['navbar'],
  layout,
  /**
   * REQUIRED.
   * e.g. cybertoothca
   */
  organizationName: undefined,
  /**
   * REQUIRED.
   * e.g. ember-helper-locale-date
   */
  packageName: undefined,
  tagName: 'nav'
});
