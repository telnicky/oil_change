class VehiclesController < ApplicationController
  respond_to :html

  def create
    @vehicle = Vehicle.new(params[:vehicle])
    @vehicle.save!
    respond_with(@vehicle)
  end

  def destroy
    @vehicle = Vehicle.find(params[:id])
    @vehicle.destroy;
  end

  def edit 
    @vehicle = Vehicle.find(params[:id])
  end

  def index
    @vehicles = Vehicle.all
  end

  def new
    @vehicle = Vehicle.new
  end

  def show
    @vehicle = Vehicle.find(params[:id])
  end

  def update
    @vehicle = Vehicle.find(params[:id])
    @vehicle.update_attributes(params[:vehicle])
    respond_with(@vehicle)
  end
end
