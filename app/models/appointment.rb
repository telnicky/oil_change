class Appointment < ActiveRecord::Base
  attr_accessible :street, :city, :zip , :owner_notes, :scheduled_date, :scheduled_end_time, :scheduled_start_time
  attr_accessible :availability_end_time, :owner_id, :availability_start_time, :vehicle_id, :mechanic_notes, :status
  attr_accessible :mechanic_id

  
  belongs_to  :vehicle
  belongs_to  :mechanic

  has_many    :owners, :through => :appointments
  #validates :scheduled_date, :presence => true 
  #validates :owner_start, :presence => true
  #validates :owner_end, :presence => true
  #validates :mechanic_start, :presence => true
  #validates :mechanic_end, :presence => true
  validates :vehicle_id, :presence => true
  validates :owner_id, :presence => true
  validates :status, :presence => true
  validates :street, :presence => true
  validates :city, :presence => true
  validates :zip, :presence => true



  validate :scheduled_date_in_future
  
  




  STATUS = { 1 => "available", 2 => "pending", 3 => "complete"}.freeze

  


  def scheduled_date_in_future
    if scheduled_date.present?
      errors.add("We cannot go back in time to change your oil.") if scheduled_date < Date.today
    end
  end 

end
