class ApplicationController < ActionController::Base
  protect_from_forgery

  def after_sign_in_path_for(resource)
    # no one should be viewing indexes
    if(owner_signed_in?)
      owner_path(resource)
    elsif(mechanic_signed_in?)
      mechanic_path(resource)
    else
      super
    end
  end
  
end
