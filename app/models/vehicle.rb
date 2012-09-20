class Vehicle < ActiveRecord::Base
  attr_accessible :make, :model, :oil_type, :year
  has_one :appointment
  belongs_to :owner
end
