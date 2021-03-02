class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    
    if @user
      login!(@user)
      render "api/users/show", status: 200
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    logout(@user)
    render json { id: @user.id}
  end
end
