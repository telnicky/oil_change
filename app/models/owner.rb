class Owner < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email_address, :phone_number
  has_many :vehicles, :dependent => :destroy
  has_many :appointments, :through => :vehicles, :dependent => :destroy

  validates :email_address, :presence => true, :uniqueness => true
  validates :phone_number, :format => {:with => /\(\d{3}\)\d{3}\-\d{4}/}

  
end
