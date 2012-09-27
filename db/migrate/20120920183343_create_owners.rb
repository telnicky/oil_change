class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string   "first_name" 
      t.string   "last_name"

      t.string   "email_address", :null => false
      t.string   "phone_number"
      
      t.timestamps
    end
  end
end
