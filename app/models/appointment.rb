class Appointment < ActiveRecord::Base
  attr_accessible :street, :city, :zip , :owner_notes, :scheduled_date, :scheduled_end_time, :scheduled_start_time
  
  belongs_to  :vehicle
  belongs_to  :mechanic

  has_many    :owners, :through => :appointments

  STATUS = { 1 => "available", 2 => "pending", 3 => "complete"}.freeze
end
