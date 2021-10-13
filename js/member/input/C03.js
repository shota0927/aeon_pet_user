$(function () {
  $(document).on("mousedown", ".c03-icon-password", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var passForm = $(this).prev("input");

    if (passForm.attr("type") == "password") {
      passForm.attr("type", "text");
    } else if (passForm.attr("type") == "text") {
      passForm.attr("type", "password");
    }
  });
    // 7文字以上いれたら住所検索ボタンがアクティブになる
    if ($("#postal-code").length){
      
      if ($("#postal-code").val().length == 0) {
        $("#postal-code-submit").prop("disabled", true);
      }
      $("#postal-code").on("keydown keyup keypress change", function() {
        if ($(this).val().length < 7) {
          console.log("hello")
          $("#postal-code-submit").prop("disabled", true);
        } else {
          $("#postal-code-submit").prop("disabled", false);
        }
      });
    };
});
