class AddColumnsToMechanics < ActiveRecord::Migration
  def change
    add_column :mechanics, :provider, :string
    add_column :mechanics, :uid, :string
  end
end
