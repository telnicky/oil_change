class Owner < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email_address, :phone_number
  has_many :cars
  has_many :appointments
end
