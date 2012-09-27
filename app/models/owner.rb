class Owner < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email_address, :phone_number
  has_many :vehicles, :dependent => :destroy
  has_many :appointments, :through => :vehicles, :dependent => :destroy


  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :email_address, :presence => true, :uniqueness => true
  validates :phone_number, :presence => true, :format => {:with => /\(\d{3}\)\d{3}\-\d{4}/}

  
end
