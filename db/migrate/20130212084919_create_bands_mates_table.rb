class CreateBandsMatesTable < ActiveRecord::Migration
  def self.up
    create_table :bands_mates, :id => false do |t|
      t.references :band
      t.references :mate
    end
    add_index :bands_mates, [:band_id, :mate_id]
    add_index :bands_mates, [:mate_id, :band_id]
  end

  def self.down
    drop table :bands_mates
  end
end