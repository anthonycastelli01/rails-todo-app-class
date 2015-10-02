$(function(){
  bindListeners();
  bindSortListeners();
});

var bindListeners = function() {
  $('.newItemForm').on('submit', submitNewItem);
  $('li a').on('click', createRequest);
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

var createRequest = function(event){
  event.preventDefault();
  event.stopPropagation();

  var url = $(this).attr('href')
  var method = $(this).attr('data-method')

  $.ajax({
    url: url,
    method: method,
    dataType: 'json'
  })

  .done(function(response){
    console.log(response)
  })
};

var bindSortListeners = function(){
  $('a[id^=sort]').on('click', createSortRequest)
}

var createSortRequest = function(event){
  event.preventDefault();

  var url = $(this).attr('href')

  $.ajax({
    url: url,
    dataType: 'html'
  })

  .done(function(response){
    showSortedList(response)
  })
}

var showSortedList = function(data){
  $('ul').html(data)
}