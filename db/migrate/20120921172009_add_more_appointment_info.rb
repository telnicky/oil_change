class AddMoreAppointmentInfo < ActiveRecord::Migration
  def up
    add_column :appointments, :owner_notes, :text
    add_column :appointments, :mechanic_notes, :text
    add_column :appointments, :status, :string, :default => "Open"
    add_column :appointments, :availability_start_time, :time
    add_column :appointments, :availability_end_time, :time
    add_column :appointments, :vehicle_id, :int
    add_column :appointments, :mechanic_id, :int
  end

  def down
    remove_column :appointments, :mechanic_id, :int
    remove_column :appointments, :vehicle_id, :int
    remove_column :appointments, :availability_end_time, :time
    remove_column :appointments, :availability_start_time, :time
    remove_column :appointments, :status, :string
    remove_column :appointments, :mechanic_notes, :text
    remove_column :appointments, :owner_notes, :text
  end
end
