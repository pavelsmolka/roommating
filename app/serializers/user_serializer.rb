class UserSerializer < ActiveModel::Serializer
  attributes :id, :login, :token
end
