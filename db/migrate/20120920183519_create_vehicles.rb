class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.string   "make"
      t.string   "model"
      t.integer  "year", :limit => 4
      t.string   "color"
      t.string   "license_plate", :limit => 7
      t.string   "vin_number", :limit => 17

      t.integer  "oil_type", :default => 1
      t.text     "notes"
      t.integer  "owner_id", :null => false

      t.timestamps
    end
  end
end
