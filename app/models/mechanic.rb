class Mechanic < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :password, :password_confirmation, :remember_me
  attr_accessible :address, :street, :city, :zip, :state
  attr_accessible :company_name, :first_name, :last_name, :email, :phone_number
  has_many :appointments
  
  validates :email, :presence => true, :uniqueness => true
  validates :zip, :presence => true

end
