class PaymentsController < ApplicationController
  def new
    @appointment = Appointment.find(params[:appointment_id])
    @owner = Owner.find(@appointment.owner_id)
    @payment = Payment.new
  end 

  def show
    @owner = Owner.find(params[:owner_id])

    @customer = Stripe::Customer.retrieve(@owner.stripe_customer_id)

    @history = Stripe::Charge.all(:customer => @owner.stripe_customer_id)

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
  def get_strip_key_info
    #our unique Stripe api_key to access our account
    Stripe.api_key = 'sk_QL04yU1hG8RgS6jPmAHs2J5iMlIdc'
    token = @payment.stripeToken
  end 
  def create_customer
    if @owner.stripe_customer_id == nil
          customer = Stripe::Customer.create(
            :card => token,
            :description => @owner.id,
            :email => @owner.email
          )
          @owner.stripe_customer_id = customer.id
          @owner.save! 
        else
          customer = Stripe::Customer.retrieve(@owner.stripe_customer_id)
    end
  end  
  def charge_customer

    if params[:payment][:description] == "40"
      Stripe::Charge.create(
          #stripe can use either ":card => token" or ":customer => customer" to charge make the payment. 
          #:card => token,
          :customer => customer,
          :currency => "usd",
          :amount => 4000,
          :description => params[:description]
      )
    elsif params[:payment][:description] == "80"
      Stripe::Charge.create(
          #:card => token,
          :customer => customer,
          :currency => "usd",
          :amount => 8000,
          :description => params[:description]
      )
    end  
  end

end