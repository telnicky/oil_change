define(['models/OwnerModel'], function(OwnerModel){
  var OwnersInfoView = Backbone.View.extend({
    tagName: 'div',
    className: 'owners-info-view',

    events: {
      //add button/lisener to add vehicle
      //add button/lisener to change payment/cc info
      //add button/lisener to to edit user info 
    },

    template: _.template(
      '<h1>Welcome</h1>' +
      '<div>Name:' + '<%= name %>' + '<br/>' +
      'Email:' + '<%= email %>' + '</div>' +
      'Phone:' + '<%= phone %>' + '<br/>'
    ),
    
    //for debugging purposes
    constructor: function OwnersInfoView () {
      Backbone.View.apply(this , arguments);
    },

    initialize: function() {
      this.render();
    },

    getName: function() {
      var first = this.model.get('first_name'),
          last = this.model.get('last_name');
      return ' ' + first + ' ' + last;
    },

    getEmail: function() {
      var email = this.model.get('email');
      return ' ' + email;
    },

    getPhone: function() {
      var phone = this.model.get('phone_number');
      return ' ' + phone;
    },

    render: function () {
      this.$el.html(
        this.template({
          name: this.getName(),
          email: this.getEmail(),
          phone: this.getPhone()
        })
      );
    }

  });
  return OwnersInfoView
});