class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    #need to add workouts to this
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 422
    end
  end

  def update
    @user = User.find_by(id: current_user.id)
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :location, :weight, :bio)
  end
end
