class AppointmentsController < ApplicationController
  respond_to :html
  
  def new
    @appointment = Appointment.new
  end
  
  def create
    @appointment = Appointment.new(params[:appointment])
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

# if mechanic need to redirect to mechanic show
    redirect_to owner_path(@appointment.owner_id)
  end

  def destroy
    Appointment.find(params[:id]).destroy
    
    flash[:notice] = "Your appointment has been deleted."
    redirect_to owner_path(params[:owner_id])
  end

end
