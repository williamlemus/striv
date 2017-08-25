class Api::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
    render :index
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def show
    @workout = Workout.find_by(id: params[:id])
    if @workout
      render :show
    else
      render json: ["Workout does not exist!"], status: 404
    end
  end

  def update
    #TODO
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
    base_params = params.require(:workout).permit(:title, :distance, :exercise, :start_datetime, :polyline, :description, :user_id, :hours, :minutes, :seconds)
    base_params[:workout_time] = time_in_seconds(base_params[:hours], base_params[:minutes], base_params[:seconds])
    base_params.permit(:title, :distance, :exercise, :start_datetime, :polyline, :description, :user_id, :workout_time)
  end


  def time_in_seconds(hours, minutes, seconds)
    seconds.to_i + minutes.to_i*60 + hours.to_i*3600
  end
end
