class Vehicle < ActiveRecord::Base

  attr_accessible :make, :model, :oil_type, :year, :license_plate, :notes, :vin_number, :owner_id
  attr_accessible :color

  
  has_many :appointments, :dependent => :destroy
  belongs_to :owner

  

  OIL_TYPE = { 1 => "Regular", 2 => "Sythetic", 3 => "Other(See Note)"}.freeze


  validates :make, :presence => true
  validates :model, :presence => true
  validates :license_plate, :presence => true
  validates :oil_type, :presence => true
  validates :owner_id, :presence => true
  validates :vin_number, :presence => true
  validates :year, :presence => true


end
