class StuffSerializer < ActiveModel::Serializer
  attributes :id, :note, :price
  has_one :commodity
  has_one :mate
end
