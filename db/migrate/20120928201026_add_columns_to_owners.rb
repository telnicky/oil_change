class AddColumnsToOwners < ActiveRecord::Migration
  def change
    add_column :owners, :provider, :string
    add_column :owners, :uid, :string
  end
end
