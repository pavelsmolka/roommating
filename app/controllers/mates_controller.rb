class MatesController < ApplicationController
  # GET /mates
  # GET /mates.json
  def index
    @mates = Mate.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @mates }
    end
  end

  # GET /mates/1
  # GET /mates/1.json
  def show
    @mate = Mate.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @mate }
    end
  end

  # GET /mates/new
  # GET /mates/new.json
  def new
    @mate = Mate.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @mate }
    end
  end

  # GET /mates/1/edit
  def edit
    @mate = Mate.find(params[:id])
  end

  # POST /mates
  # POST /mates.json
  def create
    @mate = Mate.new(params[:mate])

    respond_to do |format|
      if @mate.save
        format.html { redirect_to @mate, notice: 'Mate was successfully created.' }
        format.json { render json: @mate, status: :created, location: @mate }
      else
        format.html { render action: "new" }
        format.json { render json: @mate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /mates/1
  # PUT /mates/1.json
  def update
    @mate = Mate.find(params[:id])

    respond_to do |format|
      if @mate.update_attributes(params[:mate])
        format.html { redirect_to @mate, notice: 'Mate was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @mate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mates/1
  # DELETE /mates/1.json
  def destroy
    @mate = Mate.find(params[:id])
    @mate.destroy

    respond_to do |format|
      format.html { redirect_to mates_url }
      format.json { head :no_content }
    end
  end
end
