class Vehicle < ActiveRecord::Base
  attr_accessible :make, :model, :oil_type, :year, :license_plate, :notes, :vin_number, :owner_id
  
  has_many :appointments
  belongs_to :owner
  
end
