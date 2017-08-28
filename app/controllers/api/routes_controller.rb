class Api::RoutesController < ApplicationController

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
    @route = Route.find_by(id: params[:id])
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
