class VehiclesController < ApplicationController
  respond_to :html


  def new
    @vehicle = Vehicle.new
  end

  def create
    @vehicle = Vehicle.new(params[:vehicle])
    @vehicle.save!

    #respond_with(@vehicle)
    redirect_to owner_path(@vehicle.owner_id)
  end

  def index
    @vehicles = Vehicle.all
  end

   def show 
    @vehicle = Vehicle.find(params[:id])
   end

  def edit 
    @vehicle = Vehicle.find(params[:id])
  end

  def update
    @vehicle = Vehicle.find(params[:id])
    @vehicle.update_attributes(params[:vehicle])

    redirect_to owner_path(@vehicle.owner_id)
  end
  
  def delete
  end 
    
  def destroy
    Vehicle.find(params[:id]).destroy

    flash[:notice] = "I hope your going Green. Your vehicle has been deleted."
    redirect_to owner_path(params[:owner_id])
  end

end
