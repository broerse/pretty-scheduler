import Ember from 'ember';

export default Ember.Component.extend({
  isShowingNewAttendeeCalendar: true,

  hasAttendees: Ember.computed.notEmpty('event.attendees'),

  actions: {
    toggleCalendars() {
      this.toggleProperty('isShowingNewAttendeeCalendar');
    },
    createAttendee(attendeeObject) {
      this.sendAction('createAttendee', attendeeObject);
    }
  }
});
