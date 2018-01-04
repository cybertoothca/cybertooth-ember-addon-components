import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-navbar', 'Integration | Component | twbs navbar', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twbs-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twbs-navbar}}
      template block text
    {{/twbs-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
