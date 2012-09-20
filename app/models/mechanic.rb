class Mechanic < ActiveRecord::Base
  attr_accessible :address, :city, :company_name, :email_address, :phone_number, :state
  has_many :appointments
  

end
