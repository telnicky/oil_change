$(function () {
  require(['views/OwnersInfoView', //owner info
            'models/Owner',
            'collections/Owners'
            // '', //appointments
            // '', //cc & payment info
            // '', //vehicles
          ],
    function (OwnersInfoView, Owner, Owners) {
                                                   // ??owner_id???????   
      var ownersInfo = new Owner(window.jsonData.id)

      var ownersInfoView = new OwnersInfoView({
        collection: Owners

      });


      $('.owners-info-area').append(ownersInfoView.el);
    })
});