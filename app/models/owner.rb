class Owner < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :password, :password_confirmation, :remember_me
  attr_accessible :first_name, :last_name, :email, :phone_number
  has_many :vehicles, :dependent => :destroy
  has_many :appointments, :through => :vehicles, :dependent => :destroy


  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :email, :presence => true, :uniqueness => true
  validates :phone_number, :presence => true, :format => {:with => /\(\d{3}\)\d{3}\-\d{4}/}

  
end
