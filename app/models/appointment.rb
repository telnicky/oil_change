class Appointment < ActiveRecord::Base
  attr_accessible :location, :scheduled_date, :scheduled_end_time, :scheduled_start_time
  belongs_to :vehicle
  belongs_to :mechanic
end
