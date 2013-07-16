$(function () {
  define([   'views/OwnersInfoView', 'models/OwnerModel',
             'views/OwnerAppointmentsView', 'views/OwnerAppointmentItemView', 'collections/Appointments', 'models/Appointment',
             //cc & payment info
             'main/vehicleMain', 'collections/Vehicles' ],
    
    function (OwnersInfoView, OwnerModel,
              OwnerAppointmentsView, OwnerAppItemView, AppointmentsCollection, AppointmentsModel,
              //cc & payment info
              VehicleMain, VehiclesCollection) {

    var ownersInfo = new OwnerModel(window.jsonDataOwnerInfo),
        ownerDataView = new OwnersInfoView({
                        model:  ownersInfo});
        $('.owners-info-area').append(ownerDataView.el);


    var appointments = new AppointmentsCollection(window.jsonDataOwnersAppointments.owners_appointments),
        ownerAppView = new OwnerAppointmentsView({
                          collection: appointments,
                          itemView: OwnerAppItemView});
        $('.owners-appointment-list').append(ownerAppView.el);

    var vehiclesView = new VehicleMain();

  });
});