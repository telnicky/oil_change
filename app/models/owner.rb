class Owner < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email_address, :phone_number
  
  has_many :vehicles, :dependent => :destroy
  has_many :appointments, :through => :vehicles, :dependent => :destroy
end
