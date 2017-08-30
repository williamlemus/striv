class Api::WorkoutsController < ApplicationController

  def index
    if params[:user_id]
      @workouts = User.find(params[:user_id]).workouts
    else
      @workouts = Workout.includes(:user, :route).order(start_datetime: :desc)
    end
    render :index
  end

  def create
    @workout = Workout.includes(:user, :route).new(workout_params)
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def show
    @workout = Workout.includes(:user, :route).find_by(id: params[:id])
    if @workout
      render :show
    else
      render json: ["Workout does not exist!"], status: 404
    end
  end

  def update
    @workout = Workout.includes(:user, :route).find_by(id: params[:id])
    if @workout.user_id != current_user.id
      render json: ['Cannot edit other users workout!'], status: 401
    elsif @workout.update(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end

  end

  def destroy
    @workout = Workout.find_by(id: params[:id])
    if @workout
      @workout.destroy
      render :show
    else
      render json: ["Workout does not exist"], status: 422
    end
  end

  private

  def workout_params
    base_params = params.require(:workout).permit(:title, :exercise, :start_datetime, :description, :user_id, :hours, :minutes, :seconds, :route_id)
    base_params[:workout_time] = time_in_seconds(base_params[:hours], base_params[:minutes], base_params[:seconds]) unless base_params[:hours].nil? && base_params[:minutes].nil? && base_params[:seconds].nil?
    base_params.permit(:title, :exercise, :start_datetime, :description, :user_id, :workout_time, :route_id)
  end


  def time_in_seconds(hours, minutes, seconds)
    seconds.to_i + minutes.to_i*60 + hours.to_i*3600
  end
end
