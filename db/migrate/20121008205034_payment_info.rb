class PaymentInfo < ActiveRecord::Migration  
  def change
    create_table :payments do |p|
      p.string  "stripeToken", :null => false
      p.text    "description"
      p.integer "appointment_id", :null => false
      p.integer "mechanic_id"

      p.timestamps
    end
  end
end