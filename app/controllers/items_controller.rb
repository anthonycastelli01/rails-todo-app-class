class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      redirect_to items_path
    else
      redirect_to items_path
    end
  end

  private

  def item_params
    params.require(:item).permit(:task)
  end
end
