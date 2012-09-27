class AddOwnerIDs < ActiveRecord::Migration
  def up
    add_column :appointments, :owner_id, :int
  end

  def down
    remove_column :appointments, :owner_id, :int
  end
end
