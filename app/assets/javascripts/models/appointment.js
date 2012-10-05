var appointment = Backbone.model.extend({
  urlRoot: '/appointments'

  defaults {
    'street':
    'city':
    'zip':
    'owner_notes':
    'owner_start':
    'owner_end':
    'mechanic_start':
    'mechanic_end':
    'mechanic_notes':
    'status':
    'mechanic_id':
    'owner_id':
    'vehicle_id':

  }

});

