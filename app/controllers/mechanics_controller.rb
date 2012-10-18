class MechanicsController < ApplicationController
  respond_to :html, :json
  before_filter :authenticate_mechanic!

  def create
    @mechanic = Mechanic.new(params[:mechanic])
    @mechanic.save!
    respond_with(@mechanic)
  end

  def destroy
    @mechanic = Mechanic.find(params[:id])
    @mechanic.destroy;
  end

  def edit 
    @mechanic = Mechanic.find(params[:id])
  end

  def index
    @mechanics = Mechanic.all
  end

  def new
    @mechanic = Mechanic.new
  end

  def show
    @mechanic = Mechanic.find(params[:id])
    @available_appointments = Appointment.find_all_by_status(1)
    @current_appointments = @mechanic.appointments.where(:status => 2)
    @complete_appointments = @mechanic.appointments.where(:status => 3)
    @json_data = { :available_appointments => @available_appointments, 
                   :complete_appointments => @complete_appointments,
                   :current_appointments => @current_appointments,
                   :mechanic => @mechanic }
    respond_with(@mechanic)
  end

  def update
    @mechanic = Mechanic.find(params[:id])
    @mechanic.update_attributes(params[:mechanic])
    respond_with(@mechanic)
  end

  def add_job
    appointment = Appointment.find(params[:appointment_id])
    appointment.update_attributes(:status => 2, :mechanic_id => params[:id])

    redirect_to :back
  end
  
  def remove_job
    appointment = Appointment.find(params[:appointment_id])
    appointment.update_attributes(:status => 1, :mechanic_id => "")
    redirect_to :back
  end

  def complete_job
    appointment = Appointment.find(params[:appointment_id])
    appointment.update_attributes(:status => 3)
    redirect_to :back
  end  
end
