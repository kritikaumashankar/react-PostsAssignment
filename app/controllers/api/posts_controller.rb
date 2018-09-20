

class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  def index
    render json: Post.order(created_at: :desc)
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    @post.post_time = @post.update_post_time
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end

  end

  def destroy
    @post.destroy
  end

  private
      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:description, :category, :author, :post_time, :featured)
      end
end
