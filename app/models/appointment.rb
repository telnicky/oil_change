class Appointment < ActiveRecord::Base
  attr_accessible :street, :city, :zip , :owner_notes, :scheduled_date, :scheduled_end_time, :scheduled_start_time
  attr_accessible :availability_end_time, :owner_id, :availability_start_time, :vehicle_id, :mechanic_notes, :status
  
  belongs_to  :vehicle
  belongs_to  :mechanic

  has_many    :owners, :through => :appointments

  STATUS = { 1 => "available", 2 => "pending", 3 => "complete"}.freeze
end
