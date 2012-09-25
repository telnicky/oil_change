class MechanicsController < ApplicationController
  respond_to :html

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
    @available_appointments = Appointment.find_all_by_status(Appointment::STATUS[1])

  end

  def update
    @mechanic = Mechanic.find(params[:id])
    @mechanic.update_attributes(params[:mechanic])
    respond_with(@mechanic)
  end




  def add_job
    appointment = Appointment.find(params[:appointment_id])
    appointment.update_attributes(:status => "reserved", :mechanic_id => params[:id])

    redirect_to :back
  end
  
  def remove_job
    appointment = Appointment.find(params[:appointment_id])
    appointment.update_attributes(:status => "Open", :mechanic_id => "")
    redirect_to :back
  end

  def complete_job
    appointment = Appointment.find(params[:appointment_id])
    appointment.update_attributes(:status => "completed")
    redirect_to :back
  end  
end
