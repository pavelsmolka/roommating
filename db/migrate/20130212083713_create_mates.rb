class CreateMates < ActiveRecord::Migration
  def change
    create_table :mates do |t|
      t.string :name
      t.references :user

      t.timestamps
    end
    add_index :mates, :user_id
  end
end
