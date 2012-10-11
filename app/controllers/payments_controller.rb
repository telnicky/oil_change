class PaymentsController < ApplicationController
  def new
    @appointment = Appointment.find(params[:appointment_id])
    @owner = Owner.find(@appointment.owner_id)
    @payment = Payment.new
  end  

  def create
    @payment = Payment.new
    @payment.stripeToken = params[:stripeToken]
    @payment.description = params[:payment][:appointment_id]
    @payment.appointment_id = params[:payment][:description]

    @appointment = Appointment.find(params[:payment][:appointment_id])
    @owner = Owner.find(@appointment.owner_id)

    charge_customer

    @payment.save!
    redirect_to owner_path(:id => @owner.id ) 
  end

private 
  def charge_customer
    Stripe.api_key = 'sk_QL04yU1hG8RgS6jPmAHs2J5iMlIdc'

    token = @payment.stripeToken
   # owner_id = @owner.id
   # appointment_id = @appointment.id

    customer = Stripe::Customer.create(
      :card => token,
      :description => @appointment.id,
      :email => "test@stripetest.com"
    )

    if params[:payment][:description] == 40
      Stripe::Charge.create(
          :customer => customer,
          :currency => "usd",
          :amount => 4000,
          :description => params[:description]
      )
    elseif params[:payment][:description] == 80
      Stripe::Charge.create(
          :customer => customer,
          :currency => "usd",
          :amount => 8000,
          :description => params[:description]
      )
    end  
  end

end