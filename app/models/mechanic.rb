class Mechanic < ActiveRecord::Base
  attr_accessible :address, :street, :city, :zip, :state
  attr_accessible :company_name, :first_name, :last_name, :email_address, :phone_number
  has_many :appointments
  
  validates :email_address, :presence => true, :uniqueness => true
  validates :phone_number, :presence => true, :format => {:with => /\(\d{3}\)\d{3}\-\d{4}/}
  validates :zip, :presence => true

end
