class Appointment < ActiveRecord::Base
  attr_accessible :street, :city, :zip, :owner_notes
  attr_accessible :owner_start, :owner_end, :mechanic_start, :mechanic_end, :mechanic_notes, :status
  attr_accessible :mechanic_id, :owner_id, :vehicle_id, :state

  belongs_to  :vehicle
  belongs_to  :mechanic
  has_many    :owners, :through => :appointments
  has_one     :payment

    # validates :owner_start, :presence => true
    # validates :owner_end, :presence => true
    # when the appointment is set it doesn't need a mechanic start or end. 
    # validates :mechanic_start, :presence => true 
    # validates :mechanic_end, :presence => true
  validates :vehicle_id, :presence => true
  validates :owner_id, :presence => true
  validates :status, :presence => true
  validates :street, :presence => true
  validates :city, :presence => true
  validates :zip, :presence => true
  validate :owner_start_in_future

  STATUS = { 1 => "Open", 2 => "Reserved", 3 => "Job Complete"}.freeze

  def owner_start_in_future
    if owner_start.present?
      errors.add("You tried to schedule your appointment in thet past. Try Again.") if owner_start < Date.today
    end
  end

end
