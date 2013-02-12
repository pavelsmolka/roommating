class Commodity < ActiveRecord::Base
  attr_accessible :name, :picture
  has_many :stuffs
end
