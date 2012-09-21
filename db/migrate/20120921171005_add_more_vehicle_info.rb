class AddMoreVehicleInfo < ActiveRecord::Migration
  def up
   add_column :vehicles, :license_plate, :string
   add_column :vehicles, :vin_number, :string
   add_column :vehicles, :notes, :text
  end

  def down
    remove_column :vehicles, :notes, :text
    remove_column :vehicles, :vin_number, :string
    remove_column :vehicles, :license_plate, :string
  end
end
