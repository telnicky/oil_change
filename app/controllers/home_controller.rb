class HomeController < ApplicationController
  
  def index
    @resource = Owner.new
    @resource_name = :owner
    @devise_mapping ||= Devise.mappings[:owner]
  end
end
