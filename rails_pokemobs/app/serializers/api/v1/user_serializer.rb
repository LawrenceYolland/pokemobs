class Api::V1::UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :username, :id
end
  