class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # respond_to :json
  # GET /users
  # GET /users.json


  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def signup
    @user = User.new
    render json @user, status: :created, location: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(first_name: params[:first_name], last_name: params[:last_name], password: params[:password], email: params[:email], zipcode: params[:zipcode])
    # binding.pry
    if @user.save
      render json @user, status: :created, location: @user
      # session[:id] = @user.id
      flash[:success] = "You are now logged in!"
      # redirect_to home_path
    else
      render json: @user.errors, status: :unprocessable_entity
      # render signup
    end
  end

  def attempt_login

    if params[:email].present? && params[:password].present?
      found_user = User.where(email: params[:email]).first
      if found_user
        authorized_user = found_user.authenticate(params[:password])
      end
    end

    if !found_user
      flash.now[:alert] = "Invalid username"
      render :login
    elsif !authorized_user
      flash.now[:alert] = "Invalid password"
      render :login
    else
      session[:user_id] = authorized_user.id
      flash[:success] = "You are now logged in."
      redirect_to home_path
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to index_path
    flash[:notice] = "Logged out"
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      head :no_content
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy

    @user = User.find(params[:id])
    binding.pry
    @user.destroy

    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :password_digest, :email, :zipcode)
  end

end
