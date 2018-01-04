import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('a-ember-observer', 'Integration | Component | a ember observer', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{a-ember-observer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#a-ember-observer}}
      template block text
    {{/a-ember-observer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
