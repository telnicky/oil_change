class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.datetime "owner_start", :default => DateTime.now           
      t.datetime "owner_end",   :default => DateTime.now + 1.hour  
      t.text     "owner_notes"
      
      t.datetime "mechanic_start"
      t.datetime "mechanic_end"
      t.text     "mechanic_notes"
      
      t.integer  "mileage", :limit => 6
      t.integer  "status",  :default => 1, :null => false   

      t.string   "street"
      t.string   "city"
      t.string   "zip", :limit => 7
      t.string   "state", :limit => 2

      t.integer  "vehicle_id", :null => false
      t.integer  "mechanic_id"
      t.integer  "owner_id", :null => false


      t.timestamps
    end
  end
end
