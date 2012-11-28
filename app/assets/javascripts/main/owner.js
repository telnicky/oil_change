$(function () {
  require([ 'views/OwnersInfoView', 'models/OwnerModel',
            'views/OwnerAppointmentsView', 'views/OwnerAppointmentItemView', 'collections/Appointments'
            //cc & payment info
            //vehicles
          ],
    function (OwnersInfoView, OwnerModel, OwnerAppointmentsView, OwnerAppItemView, AppointmentsCollection) {
///////////// Display & edit owner info///////////
      var ownersInfo = new OwnerModel(window.jsonData);
      
      var ownerView = new OwnersInfoView({
        model:  ownersInfo
      });
      $('.owners-info-area').append(ownerView.el);
///////////// Display Appointments
      var appointments = new AppointmentsCollection(window.jsonData.available_appointments);
      var ownerAppView = new OwnerAppointmentsView({
        collection: appointments,
        itemView: OwnerAppItemView
      });
      
      $('.owners-appointment-list').append(ownerAppView.el);
///////////// Display Vehicles
      
    });
});