class Mechanic < ActiveRecord::Base
  attr_accessible :address, :street, :city, :zip, :state
  attr_accessible :company_name, :first_name, :last_name, :email_address, :phone_number
  has_many :appointments
  
  validates :company_name, :presence => true
  validates :email_address, :presence => true, :uniqueness => true
  
end
