class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all
    render json: @books
  end

  # GET /books/1
  # GET /books/1.json
  def show
    render json: @book
  end

  # POST /books
  # POST /books.json
  def create
    # @book = Book.new(book_params)
    @book = Book.new(title: params[:title], author: params[:author], year: params[:year], ISBN: params[:isbn])
    @book.save()
    # binding.pry

    # @book = Book.new(book_params)


    # binding.pry

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    @book = Book.find(params[:id])

    if @book.update(book_params)
      head :no_content
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book = Book.find(params[:id])
    @book.destroy

    head :no_content
  end

  private

    def set_book
      @book = Book.find(params[:id])
    end

    def book_params
      params.require(:book).permit(:title,:author,:year,:ISBN)
    end
end
