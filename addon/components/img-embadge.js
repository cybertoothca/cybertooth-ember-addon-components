import Ember from 'ember';

export default Ember.Component.extend({
  alt: 'Ember version range badge.',
  attributeBindings: ['alt', 'src'],
  /**
   * OPTIONAL.
   * @see https://embadge.io/
   */
  embadgeEnd: undefined,
  /**
   * OPTIONAL.
   * @see https://embadge.io/
   */
  embadgeLabel: undefined,
  /**
   * OPTIONAL.
   * @see https://embadge.io/
   */
  embadgeRange: undefined,
  /**
   * REQUIRED.
   * e.g. 1.13.0 or 2.4.0
   */
  embadgeStart: '1.13.0',
  src: Ember.computed('embadgeEnd', 'embadgeLabel', 'embadgeRange', 'embadgeStart', function () {
    let src = "https://embadge.io/v1/badge.svg?";
    src += Ember.isBlank(this.get('embadgeEnd')) ? '' : `end=${this.get('embadgeEnd')}`;
    src += Ember.isBlank(this.get('embadgeLabel')) ? '' : `label=${this.get('embadgeLabel')}`;
    src += Ember.isBlank(this.get('embadgeRange')) ? '' : `range=${this.get('embadgeRange')}`;
    src += Ember.isBlank(this.get('embadgeStart')) ? '' : `start=${this.get('embadgeStart')}`;
    return src;
  }),
  tagName: 'img'
});
