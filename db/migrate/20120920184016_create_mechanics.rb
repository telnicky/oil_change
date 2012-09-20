class CreateMechanics < ActiveRecord::Migration
  def change
    create_table :mechanics do |t|
      t.string :company_name
      t.string :address
      t.string :city
      t.string :state
      t.string :phone_number
      t.string :email_address

      t.timestamps
    end
  end
end
