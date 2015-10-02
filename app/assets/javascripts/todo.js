$(function(){
  bindListeners();
});

var bindListeners = function() {
  $('.newItemForm').on('submit', submitNewItem)
}

var submitNewItem = function(event) {
  event.preventDefault();

  var url = $(this).attr('action');
  var data = $(this).serialize();
  var method = $(this).attr('method');

  var formLink = $('this');

  $.ajax({
    url: url,
    data: data,
    type: method
  }).done(function(response){
    $('.newItemForm #inputField').val("");
    $('.itemList').append(response);
  });
};