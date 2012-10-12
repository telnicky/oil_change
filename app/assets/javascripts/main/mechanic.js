$(function () {
  require(
    ['collections/Appointments', 'models/Mechanic','views/MechanicAppointmentsView', 'views/AvailableAppointmentItemView'],
    function ( Appointments, Mechanic, MechanicAppointmentsView, AvailableAppointmentItemView ) {
      
      // instantiate data
      var availableAppointments = new Appointments(window.jsonData.available_appointments),
        mechanic = new Mechanic(window.jsonData.mechanic);
        


      // instantiate View
      var availableAppointmentsView = new MechanicAppointmentsView({
        collection: availableAppointments,
        mechanic: mechanic,
        itemView: AvailableAppointmentItemView
      });

      // insert into page
      $('.mechanic-appointments-container').append(availableAppointmentsView.el);
  })
});
