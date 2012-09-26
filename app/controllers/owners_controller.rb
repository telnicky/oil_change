class OwnersController < ApplicationController
  respond_to :html
  
  def new
    @owner = Owner.new
  end

  def create
    @owner = Owner.new(params[:owner])
    @owner.save!
    respond_with(@owner)
  end

  def index
    @owners = Owner.all
  end

  def show
    @owner = Owner.find(params[:id])
    @vehicles = @owner.vehicles
    @appointments = @owner.appointments
  end

  def edit 
    @owner = Owner.find(params[:id])
  end

  def update
    @owner = Owner.find(params[:id])
    @owner.update_attributes(params[:owner])
    respond_with(@owner)
  end

  def destroy
    @owner = Owner.find(params[:id])
    @owner.destroy;
  end

end
