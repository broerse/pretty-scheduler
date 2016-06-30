import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  details: attr('string'),
  location: attr('string'),
  secret: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),

  /**
    Counts the months from startDate to endDate

    @return {Array} of months as integers (0-11)
  */
  months: Ember.computed('startDate,endDate', function() {
    let months = [];
    let startMonth = this.get('startDate').getMonth();
    let endMonth = this.get('endDate').getMonth();

    if (endMonth < startMonth) {
      for(let a = startMonth; a < 12; a++) {
        months.push(a);
      }
      for(let b = 0; b <= endMonth; b++) {
        months.push(b)
      }
      return months;
    }

    for(let c = startMonth; c <= endMonth ; c++) {
      months.push(c);
    }
    return months;
  })
});
