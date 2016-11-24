function ready() {
  setTimeout(function load_ajax() {
    $.get({
      url: "/api",
      success: function ajax_success(data) {
        $("p#target").text(data);
      },
      error: function ajax_error() {
        $("p#target").text("There was an error.");
      }
    });
  }, 2000);
}

$(ready);
