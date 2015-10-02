class ItemsController < ApplicationController
  def index
    @items = Item.all

    render partial: 'list', locals: {items: @items}
  end

  def home
    @items = Item.all
  end

  def completed
    @items = Item.where(:completed => true)
    render partial: 'list', locals: {items: @items}
  end

  def active
    @items = Item.where(:completed => false)
    render partial: 'list', locals: {items: @items}
  end

  def create
    @item = Item.create(item_params)

    render :'_item', layout: false
  end

  def complete
    @item = Item.find(params[:id])
    @item.update(completed: true)

    if params[:from] == 'active'
      redirect_to active_items_path
    else
      redirect_to root_path
    end
  end

  def incomplete
    @item = Item.find(params[:id])
    @item.update(completed: false)

    if params[:from] == 'completed'
      redirect_to completed_items_path
    else
      redirect_to root_path
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    case params[:from]
    when 'completed' then redirect_to completed_items_path
    when 'active' then redirect_to active_items_path
    else redirect_to root_path
    end
  end

  private

  def item_params
    params.require(:item).permit(:task)
  end
end
