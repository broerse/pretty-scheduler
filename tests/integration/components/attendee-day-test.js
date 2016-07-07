import moduleForIntegration from '../../helpers/module-for-integration';
import hbs from 'htmlbars-inline-precompile';
import { test } from 'ember-qunit';

moduleForIntegration('Integration | Component | attendee-day', {
  beforeEach() {
    this.set('availableTimes', [
      (new Date(2016, 1, 10)).getTime()
    ]);
    this.render(hbs`
      {{attendee-day
          date=date
          availableTimes=availableTimes}}
    `);
  }
});

test('renders attendee day', function(assert) {
  this.set('date', new Date(2016, 1, 10));
  assert.equal(this.$('.month-calendar__day').text().trim(), "10");
});

test('indicates if day is available', function(assert) {
  this.set('date', new Date(2016, 1, 11));
  assert.ok(!this.$('.month-calendar__day').hasClass("month-calendar__day--available"));

  this.set('date', new Date(2016, 1, 10));
  assert.ok(this.$('.month-calendar__day').hasClass("month-calendar__day--available"));
});