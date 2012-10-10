$(function () {
  var appointmentsView = new AppointmentsView({
    collection: appointments, 
    itemView: AppointmentView
  });
  
  // insert appointmentsView.el into view
  $('.mechanic-appointments-container').append(appointmentsView.el);
});
