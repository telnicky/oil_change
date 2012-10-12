$(function () {
  require(['views/OwnersInfoView', //owner info
            'models/Owner'
            // '', //appointments
            // '', //cc & payment info
            // '', //vehicles
          ],
    function (OwnersInfoView, owner) {
                                                   // ??owner_id???????   
      var ownersInfo = new Owners(window.jsonData.id)

      var ownersInfoView = new OwnersInfoView({
        //collection: 

      });


      $('.owners-info-area').append(ownersInfoView.el);
    })
});