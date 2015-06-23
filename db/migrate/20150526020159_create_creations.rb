class CreateCreations < ActiveRecord::Migration
  def change
    create_table :creations do |t|
      t.string  :title
      t.text    :description
      t.string  :linkgithub
      t.string  :website_url
      t.text    :image
      
      t.timestamps null: false
    end
  end
end
