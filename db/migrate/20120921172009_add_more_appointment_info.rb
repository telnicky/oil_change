class AddMoreAppointmentInfo < ActiveRecord::Migration
  def up
    add_column :appointments, :owner_notes, :text
    add_column :appointments, :mechanic_notes, :text
    add_column :appointments, :status, :string
    add_column :appointments, :availability_start_time, :time
    add_column :appointments, :availability_end_time, :time

  end

  def down
    add_column :appointments, :availability_end_time, :time
    add_column :appointments, :availability_start_time, :time
    remove_column :appointments, :status, :string
    remove_column :appointments, :mechanic_notes, :text
    remove_column :appointments, :owner_notes, :text
  end
end
