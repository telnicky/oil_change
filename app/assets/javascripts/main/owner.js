$(function () {
  require(['views/OwnersView', //owner info
            '', //appointments
            '', //cc & payment info
            '', //vehicles
          ],
    function (OwnersView , , ) {

      $('.owners-wrapper').append(ownersView.el);
    })
});