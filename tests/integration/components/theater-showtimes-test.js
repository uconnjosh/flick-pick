import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('theater-showtimes', 'Integration | Component | theater showtimes', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{theater-showtimes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#theater-showtimes}}
      template block text
    {{/theater-showtimes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
