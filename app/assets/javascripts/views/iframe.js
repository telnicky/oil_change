define(['jquery.colorbox', 'jquery.colorbox-min'], function(colorbox, colorboxMin) {

  function iframeView(){ 
    $(this.el).colorbox({ 
      title: function(){
        print('this worked')
      }, //get appropriate scrim view
      opacity: 0.6,
      iframe: true,
      width: 500,
      height: 700,
      fixed: true,
      top: 25,
      left: "50%",
      right: "50%",
      onOpen: false, //maybe get scrim viewData
      onClosed: false, //maybe save data
    });
  console.log('iframe.js')  
  };
    
});