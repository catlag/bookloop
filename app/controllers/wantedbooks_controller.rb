class WantedbooksController < ApplicationController
  before_action :set_wantedbook, only: [:show, :update, :destroy]

  # GET /wantedbooks
  # GET /wantedbooks.json
  def index
    @wantedbooks = Wantedbook.all
    render json: @wantedbooks
  end

  # GET /wantedbooks/1
  # GET /wantedbooks/1.json
  def show
    render json: @wantedbook
  end

  # POST /wantedbooks
  # POST /wantedbooks.json
  def create
    @wantedbook = Wantedbook.new(wantedbook_params)

    if @wantedbook.save
      render json: @wantedbook, status: :created, location: @wantedbook
    else
      render json: @wantedbook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wantedbooks/1
  # PATCH/PUT /wantedbooks/1.json
  def update
    @wantedbook = Wantedbook.find(params[:id])

    if @wantedbook.update(wantedbook_params)
      head :no_content
    else
      render json: @wantedbook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wantedbooks/1
  # DELETE /wantedbooks/1.json
  def destroy
    @wantedbook.destroy

    head :no_content
  end

  private

    def set_wantedbook
      @wantedbook = Wantedbook.find(params[:id])
    end

    def wantedbook_params
      params.require(:wantedbook).permit(:title, :author, :year, :condition, :ISBN)
    end
end
