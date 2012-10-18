$(function () {
  require(
    ['collections/Appointments',
     'models/Mechanic',
     'views/MechanicAppointmentsView', 
     'views/AvailableAppointmentItemView',
     'views/CompleteAppointmentItemView',
     'views/CurrentAppointmentItemView'],
    function ( Appointments, 
               Mechanic, 
               MechanicAppointmentsView, 
               AvailableAppointmentItemView,
               CompleteAppointmentItemView,
               CurrentAppointmentItemView ) {
      
      // instantiate data
      var availableAppointments = new Appointments(window.jsonData.available_appointments),
        completeAppointments = new Appointments(window.jsonData.complete_appointments),
        currentAppointments = new Appointments(window.jsonData.current_appointments),
        mechanic = new Mechanic(window.jsonData.mechanic);
        


      // instantiate View
      var availableAppointmentsView = new MechanicAppointmentsView({
        collection: availableAppointments,
        mechanic: mechanic,
        itemView: AvailableAppointmentItemView
      }),
        completeAppointmentsView = new MechanicAppointmentsView({
          collection: completeAppointments,
          mechanic: mechanic,
          itemView: CompleteAppointmentItemView
        }),
        currentAppointmentsView = new MechanicAppointmentsView({
          collection: currentAppointments,
          mechanic: mechanic,
          itemView: CurrentAppointmentItemView
        });

      // insert into page
      $('.mechanic-available-appointments-container').append(availableAppointmentsView.el);
      $('.mechanic-current-appointments-container').append(currentAppointmentsView.el);
      $('.mechanic-complete-appointments-container').append(completeAppointmentsView.el);
  })
});
