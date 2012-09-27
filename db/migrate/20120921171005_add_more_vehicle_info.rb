class AddMoreVehicleInfo < ActiveRecord::Migration
  def up
   add_column :vehicles, :license_plate, :string
   add_column :vehicles, :vin_number, :string
   add_column :vehicles, :notes, :text
   add_column :vehicles, :owner_id, :int 
  end

  def down
    remove_column :vehicles, :owner_id, :int 
    remove_column :vehicles, :notes, :text
    remove_column :vehicles, :vin_number, :string
    remove_column :vehicles, :license_plate, :string
  end
end
