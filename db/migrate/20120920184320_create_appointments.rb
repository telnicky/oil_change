class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :location
      t.date :scheduled_date
      t.time :scheduled_start_time
      t.time :scheduled_end_time

      t.timestamps
    end
  end
end
