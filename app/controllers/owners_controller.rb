class OwnersController < ApplicationController
  
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
    @owner = Owner.new(params[:id])
  end

  def update
    @owner = Owner.find(params[:id])
    @owner.update_attributes(params[:owner])
    respond_with(@owner)
  end
end
