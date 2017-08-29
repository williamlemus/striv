class Api::RoutesController < ApplicationController

  def index
    @routes = Route.includes(:user).where(user_id: current_user.id)
    render :index
  end

  def create
    @route = Route.new(route_params)
    @route.user_id = current_user.id
    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def show
    @route = Route.includes(:user).find_by(id: params[:id])
    if @route
      render :show
    else
      render json: ["Route not found!"], status: 404
    end
  end

  private

  def route_params
    params.require(:route).permit(:distance, :polyline, :title)
  end
end
