# class ApplicationController < ActionController::API
#     before_action :authorized
   
#     def encode_token(payload)
#       # should store secret in env variable
#       JWT.encode(payload, 'my_s3cr3t')
#     end
   
#     def get_token
#       # { Authorization: 'Bearer <token>' }
#       request.headers['Authorization'] || request.headers['Authorisation']
#     end
   
#     def decoded_token
#       # binding.pry

#       if get_token
#         # header: { 'Authorization': 'Bearer <token>' }
#         begin
#           JWT.decode(get_token, 'my_s3cr3t', true, algorithm: 'HS256')
#         rescue JWT::DecodeError
#           nil
#         end
#       end
#     end
   
#     def current_user

#       if decoded_token
#       user_id = decoded_token[0]['user_id']
#       @user = User.find_by(id: user_id)
#       end
#     end
   
#     def logged_in?
#       !!@user
#     end
   
#     def authorized
#       render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
#     end

#   end

class ApplicationController < ActionController::API
  before_action :set_current_user

  def encode_token(payload)
      # JWT.encode(payload, ENV['RAILS_SECRET'])
      JWT.encode(payload, 'my_s3cr3t')
  end

  def decode_token(token)
      # JWT.decode(token, ENV['RAILS_SECRET'])[0]
     JWT.decode(get_token, 'my_s3cr3t')
  end

  def get_token
      request.headers["Authorization"] || request.headers["Authorisation"]
  end

  def set_current_user
      token = get_token
      if token
          decoded_token = decode_token(token)
          @current_user = User.find(decoded_token["user_id"])
      else 
          @current_user = nil
      end
  end

  def logged_in
      !!@current_user
  end
end