class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :location
      t.date :scheduled_date, :date
      t.time :scheduled_start_time, :time
      t.time :scheduled_end_time, :time

      t.timestamps
    end
  end
end
