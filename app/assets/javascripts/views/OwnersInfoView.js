define(['model/Owner'], function(Owner){
  var OwnersInfoView = Backbone.view.extend({
    tagName: 'div',
    className: 'owners-info-view',

    events: {
      //add button/lisener to add vehicle
      //add button/lisener to change payment/cc info
      //add button/lisener to to edit user info 
    },

    template: _.template(
      '<div>Name:' + '<%= name %>' + '<br/>' +
      'Phone:' + '<%= phone %>' + '<br/>' +
      'Email:' + '<%= email %>' + '</div>'
    ),
    
    //for debugging purposes
    constructor: function OwnersInfoView () {
      Backbone.View.apply(this , arguments);
    },

    initialize: function() {
      var that = this;
      this.owner = new Owner({id: this.model.get('id')});
       this.owner.fetch({
         success: function(model, response){
           console.log('Owner View Success')
         },
         error: function(model, response){
           console.log('Owner View Failed')
         }
       })
    };

    getName: function() {
      var first = this.model.get({'first_name'}),
          last = this.model.get({'last_name'});

      return first.charAt(0).toUpperCase + ' ' + last.charAt(0).toUpperCase;
    },

    getEmail: function() {
      var email = this.model.get({'email'});
      return email;
    },

    getPhone: function() {
      var phone = this.model.get({'phone'});
      return phone;
    },

    render: function () {
      this.$el.html(
        this.template({
          name: this.getName(),
          email: this.getEmail(),
          phone: this.getphone()
        });
      );
    }

  });
  return OwnersInfoView
});