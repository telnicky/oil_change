class OwnersController < ApplicationController
  respond_to :html
  
  def create
    @owner = Owner.new(params[:owner])
    @owner.save!
    respond_with(@owner)
  end

  def destroy
    @owner = Owner.find(params[:id])
    @owner.destroy;
  end

  def edit 
    @owner = Owner.find(params[:id])
  end

  def index
    @owners = Owner.all
  end

  def new
    @owner = Owner.new
  end

  def show
    @owner = Owner.find(params[:id])
    #@vehicles = Vehicle.find_by_owner_id(@owner.id)
    @vehicles = @owner.vehicles
    @appointments = @owner.appointments
    
      #if you insert a number it works fine, but I can't seem to dynamically pull it from the appointments list.
    get_mechanic_id_from_appointment = 11 #@appointments.find(8).mechanic_id
    @mechanic = Mechanic.find(get_mechanic_id_from_appointment)

  end

  def update
    @owner = Owner.find(params[:id])
    @owner.update_attributes(params[:owner])
    respond_with(@owner)
  end


end
