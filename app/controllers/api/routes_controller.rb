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

  def update
    @route = Route.includes(:user).find_by(id: params[:id])
    if @route.user_id != current_user.id
      render json: ['Cannot edit other users route!'], status: 401
    elsif @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def destroy
    @route = Route.find_by(id: params[:id])
    @route.destroy
    render :show
  end

  private

  def route_params
    params.require(:route).permit(:distance, :polyline, :title)
  end
end
