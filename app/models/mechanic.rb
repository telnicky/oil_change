class Mechanic < ActiveRecord::Base
  attr_accessible :address, :city, :company_name, :email_address, :phone_number, :state
  has_many :appointments
  
  validates :company_name, :presence => true
  validates :email_address, :presence => true, :uniqueness => true
  validates :phone_number, :presence => true, :format => {:with => /\(\d{3}\)\d{3}\-\d{4}/}
  #validates :zip, :presence => true

end
