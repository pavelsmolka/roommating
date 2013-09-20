class CreateStuffs < ActiveRecord::Migration
  def change
    create_table :stuffs do |t|
      t.string :note
      t.integer :price
      t.references :commodity
      t.references :mate

      t.timestamps
    end
    add_index :stuffs, :commodity_id
    add_index :stuffs, :mate_id
  end
end
