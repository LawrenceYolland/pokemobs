
# class Api::V1::AuthController < ApplicationController
#   # from here:
#   # https://github.com/learn-co-students/london-web-060319/tree/master/40-rails-react-jwt-auth
#   #  the skip before is not in linked version same with the validate token method
#   skip_before_action :set_current_user, only: [:create]
#   def create
#       user = User.find_by(username: user_login_params[:username])
#       if user && user.authenticate(user_login_params[:password])
#           render json: { user: Api::V1::UserSerializer.new(user), jwt: encode_token(user_id: user.id) }, status: :accepted
#       else
#           render json: { message: 'Invalid email or password' }, status: :unauthorized
#       end
#   end

#   def validate_token
#     user = User.find_by(id: decoded_token[0]["user_id"])
#     if user
#         render json: { user: Api::V1::UserSerializer.new(user), jwt: encode_token(user_id: user.id) }, status: :accepted
#     else
#         render json: { message: 'User not found' }, status: :not_found
#     end
#   end

#   private

#   def user_login_params
#       params.require(:user).permit(:username, :password)
#   end
# end

class Api::V1::AuthController < ApplicationController
  
  skip_before_action :set_current_user, only: [:create]
   
    def create
      user = User.find_by(username: user_login_params[:username])
      if user && user.authenticate(user_login_params[:password])
        token = encode_token({ user_id: user.id })
        render json: { user: Api::V1::UserSerializer.new(user), jwt: token }, status: :accepted
      else
        render json: { message: 'Invalid username or password' }, status: :unauthorized
      end
    end

    def validate_token
      user = User.find_by(id: decoded_token[0]["user_id"])
      if user
          render json: { user: Api::V1::UserSerializer.new(user), token: encode_token(user_id: user.id) }, status: :accepted
      else
          render json: { message: 'User not found' }, status: :not_found
      end
    end

    private
   
    def user_login_params
      params.require(:user).permit(:username, :password)
    end
end

