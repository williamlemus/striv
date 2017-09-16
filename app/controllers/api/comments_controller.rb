class Api::CommentsController < ApplicationController
  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.user_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Can't delete someone elses comment!"], status: 401
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end



  private

  def comment_params
    params.require(:comment).permit(:id, :body, :workout_id)
  end
end
