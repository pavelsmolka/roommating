class User < ActiveRecord::Base
  attr_accessible :login, :token
  has_many :stuffs
  has_and_belongs_to_many :bands
end
