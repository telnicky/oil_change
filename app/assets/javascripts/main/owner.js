$(function () {
  require([ //owner
            'views/OwnersInfoView', 
            'models/OwnerModel',
            //appointments
            'views/OwnerAppointmentsView', 
            'views/OwnerAppItemView', 
            'collections/Appointments'
            //cc & payment info
            //vehicles
          ],
    function (OwnersInfoView, OwnerModel, OwnerAppointmentsView, OwnerAppItemView, AppointmentsCollection) {
///////////// Display  Owner Name, Email, Phone and Buttons for changing info, adding vehicles, etc.
      var ownersInfo = new OwnerModel(window.jsonData)
      
      var ownerView = new OwnersInfoView({
        model:  ownersInfo
      });
      $('.owners-info-area').append(ownerView.el);
///////////// Display Appointments
      var ownerAppView = new OwnerAppointmentsView({
        collection: AppointmentsCollection,
        itemview: OwnerAppItemView
      });
      
      $('.owners-appointment-list').append(ownerAppView.el);
///////////// Display Vehicles

    })
});