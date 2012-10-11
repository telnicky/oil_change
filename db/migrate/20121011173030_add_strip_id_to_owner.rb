class AddStripIdToOwner < ActiveRecord::Migration
  def change
    change_table :owners do |t|
      t.string "stripe_customer_id"
    end  
  end
end
