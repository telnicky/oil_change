define(['models/OwnerModel', 'views/AddVehicleScrimView', 'models/Vehicle'],
  function(OwnerModel, AddVehicleScrimView, vehicleModel){
    var OwnersInfoView = Backbone.View.extend({
      tagName: 'div',
      className: 'owners-info-view',

      events: {
        'click .add-vehicle': 'addVehicleScrim',
        'click .edit-user-info': 'editUserInfoScrim',
        'click .manage-payments': 'managePaymentsScrim',
        'click .submit-form': 'clickSubmitForm',
        'click .cancel-form': 'clickCancelForm',
        'click .save-user-info': 'clickSaveUserInfo'
      },

      template: _.template(
        '<h1>Welcome</h1>' +
        '<div class="user-name">Name: ' + '<span><%= name %></span>' + '</div>' +
        '<div class="user-email">Email: ' + '<span><%= email %></span>' + '</div>' +
        '<div class="user-phone">Phone: ' + '<span><%= phone %></span>' + '</div>' +
        //Input fields - show when 'Edit User Info' is clicked
        '<div class="user-name-form">Name:<input id="change-name" value ="' + '<%= name %>' + '"></input></div>' +
        '<div class="user-email-form">Email:<input id="change-email" value="' + '<%= email %>' + '"></input></div>' +
        '<div class="user-phone-form">Phone:<input id="change-phone" value="' + '<%= phone %>' + '"></input></div>' +
        //Buttons to add vehicles, change owner info, manage payments
        '<a class="btn btn-primary btn-small btn-block add-vehicle">Add a Vehicle</a>' +
        '<a class="btn btn-success btn-small btn-block edit-user-info">Edit User Info</a>' +
          '<a class="btn btn-success btn-small btn-block save-user-info">Save User Info</a>' +
        '<a class="btn btn-success btn-small btn-block manage-payments">Manage Payments</a>' +
        //Scrim/Popup view for editing owner info without leaving the page - VIEW INCOMPLETE
        '<div class="scrim-info"></div>'
      ),
      
      //for debugging purposes
      constructor: function OwnersInfoView () {
        Backbone.View.apply(this , arguments);
      },

      initialize: function() {
        this.render();
      },

      render: function () {
        this.$el.html(
          this.template({
            name: this.getName(),
            email: this.getEmail(),
            phone: this.getPhone()
          })
        );
      },

      getName: function() {
        var first = this.model.get('first_name'),
            last = this.model.get('last_name');
        return first + ' ' + last;
      },

      getEmail: function() {
        var email = this.model.get('email');
        return email;
      },
      
      getPhone: function() {
        var phone = this.model.get('phone_number');
        return phone;
      },
      
      addVehicleScrim: function() {
        var addVehicleView = new AddVehicleScrimView();
        $('.scrim-info').html(addVehicleView.el.innerHTML);
      },

      editUserInfoScrim: function() {
        //hide user info
        $('.add-vehicle, .edit-user-info, .manage-payments').hide();
        $('.user-name, .user-email, .user-phone').hide();
        //show user form
        $('.user-name-form, .user-email-form, .user-phone-form').show();
        $('.save-user-info').css('display', 'inline-block');
      },

      clickSaveUserInfo: function() {
        var fullName = $('#change-name').val(),
            newEmail = $('#change-email').val(),
            phone =    $('#change-phone').val(),
            nameArray = this.splitFullName(fullName);
        var firstName = nameArray[0],
            lastName =  nameArray[1];
        this.model.save({email: newEmail, first_name: firstName, last_name: lastName, phone_number: phone});
        this.render();
      },

      splitFullName: function(fullName) {
        var nameArray = fullName.split(" ");
        return nameArray;
      },

      managePaymentsScrim: function() {
        console.log('managePaymentsScrim');
      },
      
      clickSubmitForm: function() {
        var owner_id = this.model.get('id');
        var vehicle = new vehicleModel({
          make:  $('#vehicle-make').val(),
          model: $('#vehicle-model').val(),
          year:  $('#vehicle-year').val(),
          color: $('#vehicle-color').val(),
          license_plate: $('#vehicle-license-plate').val(),
          vin_number:    $('#vehicle-vin-number').val(),
          oil_type:      $('#vehicle-oil-type').val(),
          notes:         $('#vehicle-note').val(),
          owner_id: owner_id
        });
        console.log(vehicle);

        vehicle.save();
        $('.scrim-info').empty();
      },

      clickCancelForm: function() {
        $('.scrim-info').empty();
      }
  });
  return OwnersInfoView;
});