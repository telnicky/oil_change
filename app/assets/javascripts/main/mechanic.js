$(function () {
  require(
    ['views/AppointmentsView', 'views/AppointmentItemView', 'collections/Appointments'],
    function (AppointmentsView , AppointmentItemView , Appointments) {
      // instantiate collection
      var appointments = new Appointments(window.jsonData);
      
      // instantiate View
      var appointmentsView = new AppointmentsView({
        collection: appointments, 
        itemView: AppointmentItemView
      });

      // insert into page
      $('.mechanic-appointments-container').append(appointmentsView.el);
  })
});
