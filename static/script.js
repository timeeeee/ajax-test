$(function ready() {
  $.get({
    url: "http://127.0.0.1:5000/api",
    headers: {"Access-Control-Allow-Origin": "*"},
    context: $("body"),
    success: function ajax_success(data) {
      $( this ).append($("<p>" + data + "</p"));
    },
    error: function ajax_error() {
      $( this ).append($("<p>there was an error</p>"));
    }
  })
});
