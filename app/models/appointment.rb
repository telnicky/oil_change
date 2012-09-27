class Appointment < ActiveRecord::Base
  attr_accessible :street, :city, :zip , :owner_notes, :owner_start, :owner_end
  attr_accessible :owner_id, :vehicle_id, :mechanic_notes, :status
  attr_accessible :mechanic_id

  
  belongs_to  :vehicle
  belongs_to  :mechanic

  has_many    :owners, :through => :appointments

  validates :owner_start, :presence => true
  validates :owner_end, :presence => true
  validates :mechanic_start, :presence => true
  validates :mechanic_end, :presence => true
  validates :vehicle_id, :presence => true
  validates :owner_id, :presence => true
  validates :status, :presence => true
  validates :street, :presence => true
  validates :city, :presence => true
  validates :zip, :presence => true



  validate :owner_start_in_future
  
  




  STATUS = { 1 => "available", 2 => "pending", 3 => "complete"}.freeze

  


  def owner_start_in_future
    if owner_start.present?
      errors.add("We cannot go back in time to change your oil.") if owner_start < Date.today
    end
  end 

end
