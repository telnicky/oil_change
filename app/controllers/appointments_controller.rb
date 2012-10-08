class AppointmentsController < ApplicationController
  respond_to :html, :json
  
  def new
    @appointment = Appointment.new
  end
  
  def create
    appointment = params[:appointment]
    #appointment[:scheduled_date] = Date.strptime(appointment[:scheduled_date], '%m/%d/%Y')
    #appointment[:scheduled_start_time] = Time.parse(appointment[:scheduled_start_time])
    #appointment[:scheduled_end_time] = Time.parse(appointment[:scheduled_end_time])
    @appointment = Appointment.new(appointment)
    @appointment.save!
    redirect_to owner_path(@appointment.owner_id)
  end

  def index
    @appointments = Appointment.all
  end

  def show
    @appointment = Appointment.find(params[:id])
    @appointments = Appointment.all
  end

  def edit 
    @appointment = Appointment.find(params[:id])
    @mechanic_id = params[:mechanic_id]
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment.update_attributes(params[:appointment])

    redirect_to owner_path(@appointment.owner_id)
  end

  def destroy
    Appointment.find(params[:id]).destroy
    
    flash[:notice] = "Your appointment has been deleted."
    redirect_to owner_path(params[:owner_id])
  end

end
