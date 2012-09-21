class AppointmentsController < ApplicationController
  respond_to :html
  
  def create
    @appointment = Appointment.new(params[:appointment])
    @appointment.save!
    respond_with(@appointment)
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    @appointment.destroy;
  end

  def edit 
    @appointment = Appointment.find(params[:id])
  end

  def index
    @appointments = Appointment.all
  end

  def new
    @appointment = Appointment.new
  end

  def show
    @appointment = Appointment.find(params[:id])
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment.update_attributes(params[:appointment])
    respond_with(@appointment)
  end
end
