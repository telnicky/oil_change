class AppointmentsController < ApplicationController
  respond_to :html
  
  def new
    @appointment = Appointment.new
  end
  
  def create
    @appointment = Appointment.new(params[:appointment])
    @appointment.save!
    binding.pry
    redirect_to owner_path(@appointment.owner_id)
  end

  def index
    @appointments = Appointment.all
  end

  def show
    @appointment = Appointment.find(params[:id])
  end

  def edit 
    @appointment = Appointment.find(params[:id])
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment.update_attributes(params[:appointment])

    redirect_to owner_path(@appointment.owner_id)
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    @appointment.destroy;
  end

end
