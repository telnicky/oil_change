class CreateMechanics < ActiveRecord::Migration
  def change
    create_table :mechanics do |t|
      t.string   "company_name"
      t.string   "first_name"
      t.string   "last_name"

      t.string   "street"
      t.string   "city"
      t.integer  "zip", :limit => 7
      t.string   "state", :limit => 2

      t.string   "phone_number"
      t.string   "email_address", :null => false

      t.timestamps
    end
  end
end