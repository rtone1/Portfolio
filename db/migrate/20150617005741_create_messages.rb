class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name
      t.string :email
      t.string :phone, 'char(10)'
      t.text :message
      t.date :sent

      t.timestamps null: false
    end
  end
end
