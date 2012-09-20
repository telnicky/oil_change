class OwnersController < ApplicationController
  
  def create
  end

  def destroy
  end

  def edit
  end

  def index
    @owner = Owner.find(params[:id])
    respond_with(@owner)
  end

  def new
    @owner = Owner.new
  end

  def update
    # update owner info
  end
end
