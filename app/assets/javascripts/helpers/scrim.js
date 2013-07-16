define([], function() {
  var Scrim = Backbone.View.extend({

    className: 'scrim-cover',

    events: {
      'click .scrim-cover': 'destroyScrim'
    },

    constructor: function Scrim() {
      Backbone.View.apply(this, arguments);
    },


    initialize: function() {
      this.build();
    },

    build: function() {
      this.scrimInner = this.make('div', { className: 'scrim-inner' });
      this.el.appendChild(this.scrimInner);

      $('body').append(this.el);
      this.options.view.delegateEvents();
    },

    destroyScrim: function () {
      console.log('scrim click');
      this.el.remove();
    }


  });
  return Scrim;
});