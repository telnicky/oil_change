class Vehicle < ActiveRecord::Base
  attr_accessible :make, :model, :oil_type, :year, :license_plate, :notes, :vin_number, :owner_id
  
  has_many :appointments
  belongs_to :owner

  validates :make, :presence => true
  validates :model, :presence => true
  validates :license_plate, :presence => true
  validates :oil_type, :presence => true
  validates :owner_id, :presence => true
  validates :vin_number, :presence => true
  validates :year, :presence => true

end
