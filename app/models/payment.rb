class Payment < ActiveRecord::Base
  attr_accessible :description, :stripe_id, :last_4_digits

  belongs_to :appointment



end