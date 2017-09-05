class Api::CommentsController < ApplicationController
  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render :show
  end


  private

  def comment_params
    params.require(:comment).permit(:id, :body, :workout_id)
  end
end
