class Owner < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :omniauthable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable


  # Setup accessible (or protected) attributes for your model
  attr_accessible :password, :password_confirmation, :remember_me,
                  :first_name, :last_name, :email, :phone_number,
                  :provider, :uid, :email_address

  has_many :vehicles, :dependent => :destroy
  has_many :appointments, :through => :vehicles, :dependent => :destroy
  
  validates :email, :presence => true, :uniqueness => true


  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
    owner = Owner.where(:provider => auth.provider, :uid => auth.uid).first
  
    unless owner
      owner = Owner.create(:first_name => auth.extra.raw_info.first_name,
                           :last_name => auth.extra.raw_info.last_name, 
                           :provider => auth.provider,
                           :uid => auth.uid,
                           :email => auth.info.email,
                           :password => Devise.friendly_token[0,20])
    end
    owner
  end

  def self.new_with_session(params, session)
    super.tap do |owner|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        owner.email = data["email"] if owner.email.blank?
      end
    end
  end


end
