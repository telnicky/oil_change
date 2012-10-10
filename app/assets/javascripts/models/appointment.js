var Appointment = Backbone.Model.extend({
  urlRoot: '/appointments',

  defaults: {
    'street': '',
    'city': '',
    'zip': '',
    'owner_notes': '',
    'owner_start': '',
    'owner_end': '',
    'mechanic_start': undefined,
    'mechanic_end': undefined,
    'mechanic_notes': '',
    'status': undefined,
    'mechanic_id': undefined,
    'owner_id': undefined,
    'vehicle_id': undefined
  }

});

