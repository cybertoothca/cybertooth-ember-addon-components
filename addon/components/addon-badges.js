import Ember from 'ember';
import layout from '../templates/components/addon-badges';

export default Ember.Component.extend({
  classNames: ['p-addon-badges'],
  /**
   * OPTIONAL.
   * @see https://embadge.io/
   */
  embadgeLabel: undefined,
  /**
   * REQUIRED.
   * e.g. 1.13.0 or 2.4.0
   */
  embadgeStart: '1.13.0',
  /**
   * OPTIONAL.
   * @see https://embadge.io/
   */
  embadgeEnd: undefined,
  /**
   * OPTIONAL.
   * @see https://embadge.io/
   */
  embadgeRange: undefined,
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
  tagName: 'p'
});
