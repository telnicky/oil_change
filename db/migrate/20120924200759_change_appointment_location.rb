class ChangeAppointmentLocation < ActiveRecord::Migration
  def up
    remove_column :appointments, :location
    add_column :appointments, :street, :string
    add_column :appointments, :city, :string
    add_column :appointments, :zip, :string
  end

  def down
    remove_column :appointments, :zip
    remove_column :appointments, :city
    add_column :appointments, :location
  end
end
