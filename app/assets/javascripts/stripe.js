$(function() {

  $('#new_payment').submit(function(event) {
    event.stopPropagation();
    event.preventDefault();
    // disable the submit button to prevent repeated clicks
    $('.submit-button').attr("disabled", "disabled");

    Stripe.createToken({
        name: $('.card-name').val(),
        number: $('.card-number').val(),
        cvc: $('.card-cvc').val(),
        exp_month: $($('.card-exp option:selected')[0]).val(),
        exp_year: $($('.card-exp option:selected')[1]).val()
    }, stripeResponseHandler);
    // prevent the form from submitting with the default action
    return false;
  });

});

function stripeResponseHandler(status, response) {
  if (response.error) {
      // re-enable the submit button
      $('.submit-button').removeAttr("disabled");
      // show the errors on the form
      $("#new_payment").html(response.error.message);
  } else {
      var form$ = $("#new_payment");
      // token contains id, last4, and card type
      var token = response['id'];
      // insert the token into the form so it gets submitted to the server
      form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
      // and submit
      form$.get(0).submit();
  }
}
