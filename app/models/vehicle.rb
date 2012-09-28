class Vehicle < ActiveRecord::Base
  attr_accessible :make, :model, :oil_type, :year, :license_plate, :notes, :vin_number, :owner_id, :color
  
  has_many :appointments, :dependent => :destroy
  belongs_to :owner
  

  OIL_TYPE = { 1 => "Regular", 2 => "Sythetic", 3 => "Other(See Note)"}.freeze

end
