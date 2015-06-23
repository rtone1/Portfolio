class AddCategoryToCreations < ActiveRecord::Migration
  def change
    add_column :creations, :category, :string
  end
end
