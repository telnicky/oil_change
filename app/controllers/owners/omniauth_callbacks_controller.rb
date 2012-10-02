class Owners::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @owner = Owner.find_for_facebook_oauth(request.env["omniauth.auth"], current_owner)

    if @owner.persisted? || @owner.save!
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Facebook"
      sign_in_and_redirect @owner, :event => :authentication
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_owner_registration_url
    end
  end
end
